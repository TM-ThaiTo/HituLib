import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';
import { getFirstParamInt } from '@/lib/get-param';
import { getServiceById } from '@/services/portal-services';
import { SearchParams } from '@/types/search-params';
import '../../../styles/html.css';
import Icons from '@/components/shares/icons';
import renderTypeNews from '@/constants/type-page';

export default async function DetailServicePage({ searchParams }: SearchParams) {
  const params = await searchParams;
  const Id = getFirstParamInt(params.Id, 1);
  const data = await getServiceById(Id);

  if (!data) {
    return <p className="text-center text-red-500">Không tìm thấy dịch vụ.</p>;
  }

  return (
    <>
      <BreadcrumbWithCustomSeparator customTitle={data?.tieuDe} />
      <div className="rounded-lg bg-white p-6 shadow-sm">
        {/* <h1 className="text-3xl font-semibold mb-4 text-center">{data.tieuDe}</h1> */}
        <div className="mb-4 space-y-2">
          <h1 className="text-xl leading-snug font-bold text-gray-900 sm:text-2xl">
            {data.tieuDe}
          </h1>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
            <p>Ngày đăng: {new Date(data.ngayTao).toLocaleDateString('vi-VN')}</p>
            <span className="hidden sm:inline">|</span>
            <div className="flex items-center gap-1">
              <Icons.news className="h-4 w-4 text-gray-500" />
              <span>{renderTypeNews(7)}</span>
            </div>
          </div>

          <hr className="border-gray-200" />
        </div>

        {data.anhDaiDien && (
          <div className="mb-4 flex justify-center">
            <img src={data.anhDaiDien} alt={data.tieuDe} className="max-h-96 rounded shadow" />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: data.noiDung }}
        />

        <p className="mt-8 text-right text-sm text-gray-500">
          Ngày tạo: {new Date(data.ngayTao).toLocaleDateString('vi-VN')}
        </p>
      </div>
    </>
  );
}
