import { HinhAnhHoatDong } from '@/constants/scrape';
import '@/styles/index.css';
import { getLocale, getTranslations } from 'next-intl/server';
import { ActivityImages } from '@/constants/scrape.en';
import HtmlAvailable from '@/components/shares/html-available';

export default async function HinhAnhHoatDongPage() {
  const locale = await getLocale();
  const t = await getTranslations('library_introduction');

  const title = t('photos_of_activities');
  const noContentMessage = t('no_content');
  const content = locale === 'en' ? ActivityImages : HinhAnhHoatDong;

  return (
    <HtmlAvailable title={title} content={content?.contentHtml} noContent={noContentMessage} />
  );
}
