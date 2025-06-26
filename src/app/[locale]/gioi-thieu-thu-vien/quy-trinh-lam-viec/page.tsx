import { QuyTrinhLamViec } from '@/constants/scrape';
import { WorkingProcedures } from '@/constants/scrape.en';
import { getLocale, getTranslations } from 'next-intl/server';
import HtmlAvailable from '@/components/shares/html-available';
import '@/styles/index.css';

export default async function QuyTrinhLamViecPage() {
  const locale = await getLocale();
  const t = await getTranslations('library_introduction');

  const title = t('working_procedures');
  const noContentMessage = t('no_content');
  const content = locale === 'en' ? WorkingProcedures : QuyTrinhLamViec;

  return (
    <HtmlAvailable title={title} content={content?.contentHtml} noContent={noContentMessage} />
  );
}
