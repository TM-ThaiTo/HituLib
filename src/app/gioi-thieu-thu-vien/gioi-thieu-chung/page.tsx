import { GioiThieuChung } from '@/constants/scrape';
import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import '@/styles/html.css';
import { getGioiThieuChung } from '@/services/portal-services';

export default async function GioiThieuChungPage() {
  const data = await getGioiThieuChung();

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe="giới thiệu chung" />

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          {data
            ? <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: data?.noiDung }}
            />
            : <span className='text-red-500 flex justify-center'>Không có nội thông tin giới thiệu chung</span>
          }
        </div>
      </div>
    </div>
  );
}
