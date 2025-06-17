import Icons from '@/components/shares/icons';
import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import CustomLink from '@/hooks/next-link';
import routes from '@/constants/routes';
import OptimizedImage from '@/lib/image';

const dataGioiThieu = [
  {
    id: 1,
    tieuDe: 'Giới thiệu chung',
    duongDan: routes.gioiThieuThuVien.gioiThieuChung.path,
    moCuaSoMoi: false,
  },
  {
    id: 2,
    tieuDe: 'Sơ đồ tổ chức hoạt động',
    duongDan: routes.gioiThieuThuVien.soDoToChuc.path,
    moCuaSoMoi: false,
  },
  {
    id: 3,
    tieuDe: 'Nội quy thư viện',
    duongDan: routes.gioiThieuThuVien.noiQuy.path,
    moCuaSoMoi: false,
  },
  {
    id: 4,
    tieuDe: 'Quy định sử dụng thư viện',
    duongDan: routes.gioiThieuThuVien.quyDinhSuDung.path,
    moCuaSoMoi: false,
  },
  {
    id: 5,
    tieuDe: 'Lịch làm việc của thư viện',
    duongDan: routes.gioiThieuThuVien.lichLamViec.path,
    moCuaSoMoi: false,
  },
  {
    id: 6,
    tieuDe: 'Hình ảnh hoạt động',
    duongDan: routes.gioiThieuThuVien.hinhAnhHoatDong.path,
    moCuaSoMoi: false,
  },
  {
    id: 7,
    tieuDe: 'Tổng hợp các văn bản pháp quy về hoạt động thư viện',
    duongDan: routes.gioiThieuThuVien.vanBanPhapQuy.path,
    moCuaSoMoi: false,
  },
  {
    id: 8,
    tieuDe: 'Quy trình làm việc',
    duongDan: routes.gioiThieuThuVien.quyTrinhLamViec.path,
    moCuaSoMoi: false,
  },
];

export default function MainGioiThieu() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe="giới thiệu thư viện" />

      <OptimizedImage
        width={1012}
        height={342}
        src="/gioi-thieu/gioi-thieu-thu-vien-hitu-2024.png"
        alt="Giới thiệu thư viện HITU 2024"
        className="mb-6 h-auto w-full object-contain"
      />

      <p className="mb-4 text-lg font-semibold text-gray-800">
        Các thông tin giới thiệu thư viện trường Cao đẳng Công Thương TP.Hồ Chí Minh
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
  );
}
