import { LichLamViec } from '@/constants/scrape';
import { WorkingHours } from '@/constants/scrape.en';
import { getLocale, getTranslations } from 'next-intl/server';
import HtmlAvailable from '@/components/shares/html-available';

export default async function LichLamViecPage() {
  const locale = await getLocale();
  const t = await getTranslations('library_introduction');

  const title = t('photos_of_activities');
  const noContentMessage = t('no_content');
  const content = locale === 'en' ? WorkingHours : LichLamViec;
  return (
    <HtmlAvailable title={title} content={content?.contentHtml} noContent={noContentMessage} />
  );
}
