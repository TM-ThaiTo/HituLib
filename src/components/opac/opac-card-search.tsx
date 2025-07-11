import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Icons from '@/components/shares/icons';
import OpacSearchBar from '@/components/opac/opac-search/opac-search-bar';
import { useTranslations } from 'next-intl';

export default function OpacCardSearch() {
  const t = useTranslations('opac.search');

  return (
    <Card className="mb-8 border-t-4 border-t-blue-600">
      {/* --- Header --- */}
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-blue-600">{t('title')}</CardTitle>
        <Link href="/opac/barcode">
          <Button variant="outline" size="sm" className="flex cursor-pointer items-center gap-1">
            <Icons.camera className="h-4 w-4" />
            <span className="hidden sm:inline">{t('scan_barcode')}</span>
          </Button>
        </Link>
      </CardHeader>

      {/* --- Content --- */}
      <CardContent>
        <OpacSearchBar />
      </CardContent>

      {/* --- Footer --- */}
      <CardFooter className="border-t bg-blue-50">
        <div className="flex items-start text-sm text-gray-600">
          <Icons.info className="mt-0.5 mr-2 h-full w-5 flex-shrink-0 text-blue-600" />
          <p>{t('info')}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
