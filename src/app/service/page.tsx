import { getServiceFeatured } from '@/api/portal/api-service';
import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';
import Icons from '@/components/shares/icons';
import renderTypeNews from '@/constants/type-page';
import CustomLink from '@/hooks/next-link';

export default async function ServicePage() {
  const data = await getServiceFeatured();

  if (!data || data.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-lg font-medium text-red-500">Không tìm thấy dịch vụ.</p>
      </div>
    );
  }

  function mapId(id: number) {
    return `/service/detail-service?Id=${id}`;
  }

  return (
    <>
      <BreadcrumbWithCustomSeparator />

      <section>
        {data.map((item) => (
          <CustomLink key={item.id} href={mapId(item.id)} className="mt-3">
            <div className="group mb-3 flex transform cursor-pointer flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl">
              <div>
                <h2 className="line-clamp-2 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-700">
                  {item.tieuDe}
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 text-sm text-gray-600">
                  <p className="flex items-center gap-1">
                    <Icons.calendar className="h-4 w-4 text-gray-500" />
                    <span>Ngày đăng: {new Date(item.ngayTao).toLocaleDateString('vi-VN')}</span>
                  </p>
                  <span className="hidden text-gray-300 sm:inline">•</span>
                  <div className="flex items-center gap-1">
                    <Icons.news className="h-4 w-4 text-gray-500" />
                    <span>{renderTypeNews(7)}</span>
                  </div>
                </div>
              </div>
              <hr className="my-4 border-gray-200" />
              <div className="flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800">
                Xem chi tiết
                <Icons.arrowRight className="h-4 w-4" />
              </div>
            </div>
          </CustomLink>
        ))}
      </section>
    </>
  );
}
