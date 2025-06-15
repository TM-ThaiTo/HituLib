import { getDataNews } from '@/constants/news';
import { getFirstParamInt } from '@/lib/get-param';
import { SearchParams } from '@/types/search-params';
import PaginationComponent from '@/components/shares/pagination';
import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';
import ItemCategory from '@/components/shares/item-category';

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
          <div key={index}>
            <ItemCategory
              tieuDe={item.tieuDe}
              id={item.id}
              anhDaiDien={item.anhDaiDien}
              moTa={item.mota}
            />
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
