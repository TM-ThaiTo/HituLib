'use client';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { scanBarcode } from '@/app/action/barcode-actions';
import Icons from '@/components/shares/icons';
import { useTranslations } from 'next-intl';

export default function BarcodeMain() {
  const [barcode, setBarcode] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [hasCamera, setHasCamera] = useState(true);
  const [error, setError] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
  const t = useTranslations('barcode');

  useEffect(() => {
    // Check if browser supports getUserMedia
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setHasCamera(false);
      setError(t('scanner.errors.browser_not_supported'));
      return;
    }

    return () => {
      // Clean up video stream when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [t]);

  const startScanning = async () => {
    setError('');
    setIsScanning(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        // Start scanning frames
        requestAnimationFrame(scanFrame);
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setIsScanning(false);
      setError(t('scanner.errors.camera_access_denied'));
    }
  };

  const stopScanning = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsScanning(false);
  };

  const scanFrame = async () => {
    if (!isScanning || !videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (context && video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      try {
        // Sử dụng Server Action để xử lý mã vạch
        // Trong thực tế, bạn sẽ gửi dữ liệu hình ảnh từ canvas để xử lý
        // Ở đây chúng ta giả lập kết quả
        const imageData = canvas.toDataURL('image/jpeg', 0.8);
        const result = await scanBarcode(imageData);

        if (result.success) {
          setBarcode(result.barcode || '');
          stopScanning();

          // Navigate to search results with the barcode
          router.push(`/opac/search?q=${result.barcode}&field=isbn`);
        } else {
          // Tiếp tục quét nếu không tìm thấy mã vạch
          if (isScanning) {
            requestAnimationFrame(scanFrame);
          }
        }
      } catch (error) {
        console.error('Error scanning barcode:', error);
        if (isScanning) {
          requestAnimationFrame(scanFrame);
        }
      }
    } else {
      if (isScanning) {
        requestAnimationFrame(scanFrame);
      }
    }
  };

  const handleManualSearch = () => {
    if (barcode.trim()) {
      router.push(`/opac/search?q=${barcode}&field=isbn`);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {isScanning ? (
          <div className="relative w-full max-w-md">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                playsInline
              ></video>
              <div className="absolute inset-0 m-8 rounded border-2 border-dashed border-white opacity-70"></div>
            </div>
            <canvas ref={canvasRef} className="hidden"></canvas>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              onClick={stopScanning}
            >
              <Icons.spaceX className="h-4 w-4" />
            </Button>
            <div className="absolute inset-x-0 bottom-4 flex justify-center">
              <div className="rounded-full bg-black/70 px-4 py-2 text-sm text-white">
                {t('scanner.scanning')}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center gap-4">
              {hasCamera && (
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={startScanning}>
                  <Icons.camera className="mr-2 h-4 w-4" />
                  {t('scanner.start_scan')}
                </Button>
              )}

              <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Icons.scan className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder={t('scanner.placeholder')}
                  value={barcode}
                  onChange={(e) => setBarcode(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={handleManualSearch}
                disabled={!barcode.trim()}
              >
                <Icons.qrCode className="mr-2 h-4 w-4" />
                {t('scanner.manual_search')}
              </Button>

              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
