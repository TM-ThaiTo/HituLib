import { QuyDinhSuDung } from '@/constants/scrape';
import { UsageRegulations } from '@/constants/scrape.en';
import { getLocale, getTranslations } from 'next-intl/server';
import HtmlAvailable from '@/components/shares/html-available';

export default async function QuyDinhSuDungThuVienPage() {
  const locale = await getLocale();
  const t = await getTranslations('library_introduction');

  const title = t('usage_regulations');
  const noContentMessage = t('no_content');
  const content = locale === 'en' ? UsageRegulations : QuyDinhSuDung;

  return (
    <HtmlAvailable title={title} content={content?.contentHtml} noContent={noContentMessage} />
  );
}
