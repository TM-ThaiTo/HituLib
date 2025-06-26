import { SoDoToChucHoatDong } from '@/constants/scrape';
import { OrganizationActivityDiagram } from '@/constants/scrape.en';
import { getLocale, getTranslations } from 'next-intl/server';
import HtmlAvailable from '@/components/shares/html-available';

export default async function SoDoToChucHoatDongPage() {
  const locale = await getLocale();
  const t = await getTranslations('library_introduction');

  const title = t('organization_diagram');
  const noContentMessage = t('no_content');
  const content = locale === 'en' ? OrganizationActivityDiagram : SoDoToChucHoatDong;

  return (
    <HtmlAvailable title={title} content={content?.contentHtml} noContent={noContentMessage} />
  );
}
