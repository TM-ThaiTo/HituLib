import { QuyTrinhLamViec } from '@/constants/scrape';
import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import '@/styles/index.css';

export default function QuyTrinhLamViecPage() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe="Quy trinh làm viec" />

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: QuyTrinhLamViec.contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}
