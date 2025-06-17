import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import { SoDoToChucHoatDong } from '@/constants/scrape';
import { OrganizationActivityDiagram } from '@/constants/scrape.en';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function SoDoToChucHoatDongPage() {
  const locale = await getLocale();
  const t = await getTranslations('library_introduction');

  const title = t('organization_diagram');
  const noContentMessage = t('no_content');
  const content = locale === 'en' ? OrganizationActivityDiagram : SoDoToChucHoatDong;

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe={title} />

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          {content?.contentHtml ? (
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: content.contentHtml }}
            />
          ) : (
            <span className="flex justify-center text-red-500">{noContentMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
}
