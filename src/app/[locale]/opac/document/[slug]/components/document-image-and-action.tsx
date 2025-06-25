'use client';

import OptimizedImage from '@/lib/image';
import { Button } from '@/components/ui/button';
import Icons from '@/components/shares/icons';
import { QRCodeSVG } from 'qrcode.react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

import { DocumentType, AuthorType } from '@/types/opac-document';
import { useState, useRef } from 'react';
import { DOMAIN_URL } from '@/config/env';
import ImagePublic from '@/constants/image';
import { useTranslations } from 'next-intl';

type Props = {
  document: DocumentType;
  params: { slug: string };
};

export default function DocumentImageAndAction({ document, params }: Props) {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('document');

  const documentUrl = `${DOMAIN_URL}/opac/document/${params.slug}`;
  const qrData = JSON.stringify({
    title: document.title,
    url: documentUrl,
    isbn: document.isbn,
    authors: document.authors?.map((a: AuthorType) => a.name).join(', '),
  });

  const handleDownloadQR = () => {
    if (!qrRef.current) return;

    const svgElement = qrRef.current.querySelector('svg');
    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const canvas = window.document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = window.document.createElement('a');
        downloadLink.download = `qr-${document.title}.png`;
        downloadLink.href = pngFile;
        downloadLink.click();
      };
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
  };

  const handleShare = async (type: 'copy' | 'facebook' | 'twitter' | 'email') => {
    const shareText = `${document.title} - Thư viện HITU`;
    const shareUrl = documentUrl;

    switch (type) {
      case 'copy':
        try {
          await navigator.clipboard.writeText(window.location.href);
          toast.success(t('actions.toast.link_copied'));
        } catch (err) {
          toast.error(t('actions.toast.link_copy_error'));
        }
        break;
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
          '_blank',
        );
        break;
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
          '_blank',
        );
        break;
      case 'email':
        window.open(
          `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(`Xem tài liệu này: ${shareUrl}`)}`,
          '_blank',
        );
        break;
    }
  };

  return (
    <>
      {/* Document Image and Action Sidebar */}
      <aside>
        <div className="">
          <OptimizedImage
            src={document.coverImage || ImagePublic.notFound}
            width={300}
            height={300}
            alt={document.title}
            className="h-full w-full rounded-lg object-contain"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-4 space-y-2">
          <Button
            className={`flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl text-base font-medium transition-colors ${document.availability === 'available'
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'cursor-not-allowed bg-gray-200 text-gray-500'
              }`}
            disabled={document.availability !== 'available'}
          >
            <Icons.bookOpen className="text-lg" />
            {t('actions.borrow')}
          </Button>

          {[
            { icon: <Icons.bookmark className="text-lg" />, label: t('actions.save_to_list') },
            {
              icon: <Icons.share2 className="text-lg" />,
              label: t('actions.share'),
              dropdown: (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white text-base font-medium text-gray-800 transition-colors hover:bg-gray-100">
                      <Icons.share2 className="text-lg" />
                      {t('actions.share')}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => handleShare('copy')}
                    >
                      <Icons.link2 className="mr-2 h-4 w-4" />
                      {t('actions.share_options.copy_link')}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => handleShare('facebook')}
                    >
                      <Icons.facebook className="mr-2 h-4 w-4" />
                      {t('actions.share_options.facebook')}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => handleShare('twitter')}
                    >
                      <Icons.spaceX className="mr-2 h-4 w-4" />
                      {t('actions.share_options.twitter')}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => handleShare('email')}
                    >
                      <Icons.mail className="mr-2 h-4 w-4" />
                      {t('actions.share_options.email')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ),
            },
            {
              icon: <Icons.qrCode className="text-lg" />,
              label: t('actions.qr_code'),
              onClick: () => setIsQrModalOpen(true),
            },
          ].map((item, idx) =>
            item.dropdown ? (
              item.dropdown
            ) : (
              <Button
                key={idx}
                className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white text-base font-medium text-gray-800 transition-colors hover:bg-gray-100"
                onClick={item.onClick}
              >
                {item.icon}
                {item.label}
              </Button>
            ),
          )}
        </div>
      </aside>

      {/* QR Code Modal */}
      <Dialog open={isQrModalOpen} onOpenChange={setIsQrModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('actions.qr_modal.title')}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-6">
            <div ref={qrRef} className="mb-4 rounded-lg border border-gray-200 bg-white p-4">
              <QRCodeSVG value={qrData} size={200} level="H" includeMargin={true} />
            </div>
            <p className="text-center text-sm text-gray-600">
              {t('actions.qr_modal.description')}
            </p>
          </div>
          <DialogFooter className="flex justify-center gap-2">
            <Button variant="outline" onClick={() => setIsQrModalOpen(false)}>
              {t('actions.qr_modal.close')}
            </Button>
            <Button onClick={handleDownloadQR}>
              <Icons.share2 className="mr-2 h-4 w-4" />
              {t('actions.qr_modal.download')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
