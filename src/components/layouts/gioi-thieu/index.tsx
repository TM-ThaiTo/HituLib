import Icons from '@/components/shares/icons';
import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import CustomLink from '@/hooks/next-link';
import routes from '@/constants/routes';
import OptimizedImage from '@/lib/image';
import { useTranslations } from 'next-intl';

const dataGioiThieu = [
  {
    id: 1,
    key: 'general_introduction',
    duongDan: routes.gioiThieuThuVien.gioiThieuChung.path,
    moCuaSoMoi: false,
  },
  {
    id: 2,
    key: 'organization_diagram',
    duongDan: routes.gioiThieuThuVien.soDoToChuc.path,
    moCuaSoMoi: false,
  },
  {
    id: 3,
    key: 'library_regulations',
    duongDan: routes.gioiThieuThuVien.noiQuy.path,
    moCuaSoMoi: false,
  },
  {
    id: 4,
    key: 'usage_regulations',
    duongDan: routes.gioiThieuThuVien.quyDinhSuDung.path,
    moCuaSoMoi: false,
  },
  {
    id: 5,
    key: 'working_hours',
    duongDan: routes.gioiThieuThuVien.lichLamViec.path,
    moCuaSoMoi: false,
  },
  {
    id: 6,
    key: 'photos_of_activities',
    duongDan: routes.gioiThieuThuVien.hinhAnhHoatDong.path,
    moCuaSoMoi: false,
  },
  {
    id: 7,
    key: 'legal_documents',
    duongDan: routes.gioiThieuThuVien.vanBanPhapQuy.path,
    moCuaSoMoi: false,
  },
  {
    id: 8,
    key: 'working_procedures',
    duongDan: routes.gioiThieuThuVien.quyTrinhLamViec.path,
    moCuaSoMoi: false,
  },
];

export default function MainGioiThieu() {
  const t = useTranslations('library_introduction');

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe={t('title')} />

      <OptimizedImage
        width={1012}
        height={342}
        src="/gioi-thieu/gioi-thieu-thu-vien-hitu-2024.png"
        alt={t('title')}
        className="mb-6 h-auto w-full object-contain"
      />

      <p className="mb-4 text-lg font-semibold text-gray-800">{t('description')}</p>

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
                {t(`menu.${item.key}`)}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
