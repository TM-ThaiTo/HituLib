import { GioiThieuChung } from '@/constants/scrape';
import '@/styles/html.css';
// import { getGioiThieuChung } from '@/api/portal/api-introduction'; // ẩn api để khi nào cân thiết thì mở lại
import { GeneralIntroduction } from '@/constants/scrape.en';
import { getLocale, getTranslations } from 'next-intl/server';
import HtmlAvailable from '@/components/shares/html-available';

export default async function GioiThieuChungPage() {
  const locale = await getLocale();
  const t = await getTranslations('library_introduction');
  // const data = await getGioiThieuChung();

  const title = t('general_introduction');
  const noContentMessage = t('no_content');
  const content = locale === 'en' ? GeneralIntroduction : GioiThieuChung;

  return (
    <HtmlAvailable title={title} content={content?.contentHtml} noContent={noContentMessage} />
  );
}
