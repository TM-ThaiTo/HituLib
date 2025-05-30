import BarcodeMain from '@/components/layouts/opac/barcode';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode } from 'lucide-react';

export default function BarcodePage() {
  return (
    <div className="max-w-screen-container sm:px-6 lg:px-8">
      <Card className="mx-auto mt-4 border-t-4 border-t-blue-600">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-base text-blue-600 sm:text-lg">
            <QrCode className="mr-2 h-5 w-5" />
            Quét mã vạch/QR tài liệu
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-600 sm:text-base">
              Quét mã vạch hoặc mã QR trên tài liệu để tìm kiếm nhanh thông tin chi tiết.
            </p>
          </div>

          <BarcodeMain />

          <div className="mt-8">
            <h3 className="mb-2 text-sm font-medium">Hướng dẫn:</h3>
            <ol className="list-inside list-decimal space-y-1 text-sm text-gray-600">
              <li>Nhấn "Bắt đầu quét" để kích hoạt camera</li>
              <li>Đưa mã vạch/QR vào khung quét</li>
              <li>Giữ thiết bị ổn định cho đến khi quét thành công</li>
              <li>Hoặc nhập mã ISBN/ISSN thủ công vào ô tìm kiếm</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
