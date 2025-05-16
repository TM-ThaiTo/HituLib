import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import { SoDoToChucHoatDong } from '@/contains/scrape';

export default function MainSoDoToChucHoatDong() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe="sơ đồ tổ chức hoạt động" />

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: SoDoToChucHoatDong.contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}
