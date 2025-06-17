import { HinhAnhHoatDong } from '@/constants/scrape';
import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import '@/styles/index.css';

export default function HinhAnhHoatDongPage() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe="hình ảnh hoạt động" />

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: HinhAnhHoatDong.contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}
