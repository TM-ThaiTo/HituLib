import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import { NoiQuyThuVien } from '@/constants/scrape';

export default function MainNoiQuyThuVien() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe="nội quy thư viên" />

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: NoiQuyThuVien.contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}
