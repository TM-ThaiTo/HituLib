import { LichLamViec } from '@/constants/scrape';
import { WorkingHours } from '@/constants/scrape.en';
import { getLocale } from 'next-intl/server';
import HtmlAvailable from '@/components/shares/html-available';

export default async function LichLamViecPage() {
  const locale = await getLocale();
  const content = locale === 'en' ? WorkingHours.contentHtml : LichLamViec.contentHtml;
  return <HtmlAvailable content={content} />;
}
