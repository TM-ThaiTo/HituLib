import { NoiQuyThuVien } from '@/constants/scrape';
import { LibraryRegulations } from '@/constants/scrape.en';
import { getLocale, getTranslations } from 'next-intl/server';
import HtmlAvailable from '@/components/shares/html-available';

export default async function NoiQuyThuVienPage() {
  const locale = await getLocale();
  const t = await getTranslations('library_introduction');

  const title = t('photos_of_activities');
  const noContentMessage = t('no_content');
  const content = locale === 'en' ? LibraryRegulations : NoiQuyThuVien;
  return (
    <HtmlAvailable title={title} content={content?.contentHtml} noContent={noContentMessage} />
  );
}
