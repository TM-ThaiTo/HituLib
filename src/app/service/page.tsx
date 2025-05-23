import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';
import Icons from '@/components/shares/icons';
import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import routes from '@/constants/routes';
import CustomLink from '@/hooks/next-link';

const data = [
  {
    id: 1,
    tieuDe: 'Dịch vụ nổi bật',
    duongDan: routes.dichVu.dichVuNoiBat.path,
    moCuaSoMoi: false,
  },
  {
    id: 2,
    tieuDe: 'Dịch vụ thư viện',
    duongDan: routes.dichVu.dichVuThuVien.path,
    moCuaSoMoi: false,
  },
];

export default async function ServicePage() {
  return (
    <>
      <BreadcrumbWithCustomSeparator />
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <TieuDeGioiThieu tieuDe="dịch vụ thư viện" />
        <p className="mb-4 text-lg font-semibold text-gray-800">
          Các dịch vụ thư viện trường Cao đẳng Công Thương TP.Hồ Chí Minh
        </p>

        <div className="border border-gray-200 bg-blue-50 px-4">
          <ul className="divide-y divide-gray-200">
            {data.map((item) => (
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
