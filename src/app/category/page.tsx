import Icons from '@/components/shares/icons';
import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import CustomLink from '@/hooks/next-link';
import routes from '@/config/routes';
import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';

const dataGioiThieu = [
  {
    id: 1,
    tieuDe: 'Thông báo',
    duongDan: routes.chuyenMuc.thongBao.path,
    moCuaSoMoi: false,
  },
  {
    id: 2,
    tieuDe: 'Tin tức',
    duongDan: routes.chuyenMuc.tinTuc.path,
    moCuaSoMoi: false,
  },
  {
    id: 3,
    tieuDe: 'Thư cảm ơn',
    duongDan: routes.chuyenMuc.thuCamOn.path,
    moCuaSoMoi: false,
  },
  {
    id: 4,
    tieuDe: 'Hướng dẫn',
    duongDan: routes.chuyenMuc.huongDan.path,
    moCuaSoMoi: false,
  }
];

export default function CategoryPage() {
  return (
    <>
      <BreadcrumbWithCustomSeparator />
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <TieuDeGioiThieu tieuDe="Phân loại thư viện" />

        <p className="mb-4 text-lg font-semibold text-gray-800">
          Chuyên mục thư viện
        </p>

        <div className="border border-gray-200 bg-blue-50 px-4">
          <ul className="divide-y divide-gray-200">
            {dataGioiThieu.map((item) => (
              <li key={item.id} className="flex h-[60px] items-center gap-3 px-2 py-3 transition">
                <div className="text-red-400">
                  <Icons.plusSquare size={25} />
                </div>
                <CustomLink
                  href={item.duongDan}
                  target={item.moCuaSoMoi ? '_blank' : '_self'}
                  className="w-full text-sm font-semibold text-blue-600 no-underline hover:text-black"
                >
                  {item.tieuDe}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
