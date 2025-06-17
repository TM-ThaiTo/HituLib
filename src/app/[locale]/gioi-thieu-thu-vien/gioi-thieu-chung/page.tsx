import { GioiThieuChung } from '@/constants/scrape';
import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import '@/styles/html.css';
// import { getGioiThieuChung } from '@/api/portal/api-introduction'; // ẩn api để khi nào cân thiết thì mở lại
import { GeneralIntroduction } from '@/constants/scrape.en';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function GioiThieuChungPage() {
  const locale = await getLocale();
  const t = await getTranslations('library_introduction');
  // const data = await getGioiThieuChung();

  const title = t('general_introduction');
  const noContentMessage = t('no_content');
  const content = locale === 'en' ? GeneralIntroduction : GioiThieuChung;

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe={title} />

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          {content ? (
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: content?.contentHtml }}
            />
          ) : (
            <span className="flex justify-center text-red-500">{noContentMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
}
