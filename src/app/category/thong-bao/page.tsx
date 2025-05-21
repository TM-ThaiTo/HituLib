import CustomLink from '@/hooks/next-link';
import Image from 'next/image';
import { getDataNews } from '@/constants/news';
import { getFirstParamInt } from '@/lib/get-param';
import { mapSlugWithId } from '@/lib/slug';
import { SearchParams } from '@/types/search-params';
import PaginationComponent from '@/components/shares/pagination';
import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';

const duongDan = '/category/thong-bao';

export default async function ThongBaoPage({ searchParams }: SearchParams) {
  const params = await searchParams;
  const page = getFirstParamInt(params.page, 1);
  const perPage = getFirstParamInt(params.perPage, 10);
  const data = getDataNews(page, perPage);
  const totalPages = data.totalPages;

  const customTitle = `Thông báo - Trang ${page}`;
  return (
    <>
      <BreadcrumbWithCustomSeparator customTitle={customTitle} />

      <div className="grid grid-cols-1 gap-4">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="group flex gap-4 rounded-lg border border-gray-100 bg-white p-3 transition-all duration-300"
          >
            <div className="flex-shrink-0">
              <CustomLink href={mapSlugWithId(item.tieuDe, item.id, 'category')}>
                <Image
                  width={200}
                  height={120}
                  src={item.anhDaiDien}
                  alt={item.tieuDe}
                  className="h-[120px] w-[200px] transform rounded-md transition-transform duration-300 group-hover:scale-105"
                />
              </CustomLink>
            </div>
            <div className="p-2">
              <CustomLink href={`${mapSlugWithId(item.tieuDe, item.id)}`}>
                <div className="cursor-pointer text-base font-bold transition-colors duration-300 group-hover:text-blue-600">
                  {item.tieuDe}
                </div>
              </CustomLink>
              <div className="mt-2 line-clamp-3 text-base font-light transition-colors duration-300">
                {item.mota}
              </div>
            </div>
          </div>
        ))}
      </div>
      <PaginationComponent
        duongDan={duongDan}
        page={page}
        perPage={perPage}
        totalPages={totalPages}
      />
    </>
  );
}
