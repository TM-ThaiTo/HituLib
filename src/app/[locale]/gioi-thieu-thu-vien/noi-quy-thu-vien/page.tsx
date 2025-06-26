import { NoiQuyThuVien } from '@/constants/scrape';
import { LibraryRegulations } from '@/constants/scrape.en';
import { getLocale } from 'next-intl/server';
import HtmlAvailable from '@/components/shares/html-available';

export default async function NoiQuyThuVienPage() {
  const locale = await getLocale();
  const content = locale === 'en' ? LibraryRegulations.contentHtml : NoiQuyThuVien.contentHtml;
  return <HtmlAvailable content={content} />;
}
