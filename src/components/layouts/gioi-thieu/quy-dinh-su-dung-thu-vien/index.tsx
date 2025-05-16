import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import { QuyDinhSuDung } from '@/contains/scrape';

export default function MainQuyDinhSuDungThuVien() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe="quy định sử dụng thư viện" />

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: QuyDinhSuDung.contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}
