import { GioiThieuChung } from '@/contains/scrape';
import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import './style.css';

export default function MainGioiThieuChung() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe="giới thiệu chung" />

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: GioiThieuChung.contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}
