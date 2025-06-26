import { PhapQuyThuVien } from '@/constants/scrape';
import { LibraryLegalDocuments } from '@/constants/scrape.en';
import { getLocale, getTranslations } from 'next-intl/server';
import HtmlAvailable from '@/components/shares/html-available';

export default async function PhapQuyThuVienPage() {
  const locale = await getLocale();
  const t = await getTranslations('library_introduction');

  const title = t('legal_documents');
  const noContentMessage = t('no_content');
  const content = locale === 'en' ? LibraryLegalDocuments : PhapQuyThuVien;

  return (
    <HtmlAvailable title={title} content={content?.contentHtml} noContent={noContentMessage} />
  );
}
