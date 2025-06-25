import BarcodeMain from '@/components/opac/barcode';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function BarcodePage() {
  const t = await getTranslations('barcode');

  return (
    <div className="max-w-screen-container sm:px-6 lg:px-8">
      <Card className="mx-auto mt-4 border-t-4 border-t-blue-600">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-base text-blue-600 sm:text-lg">
            <QrCode className="mr-2 h-5 w-5" />
            {t('title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-600 sm:text-base">
              {t('description')}
            </p>
          </div>

          <BarcodeMain />

          <div className="mt-8">
            <h3 className="mb-2 text-sm font-medium">{t('guide.title')}</h3>
            <ol className="list-inside list-decimal space-y-1 text-sm text-gray-600">
              {t.raw('guide.steps').map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
