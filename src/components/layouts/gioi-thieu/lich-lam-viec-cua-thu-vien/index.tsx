import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';
import { LichLamViec } from '@/constants/scrape';

export default function MainLichLamViec() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe="lịch làm việc của thư viện" />

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: LichLamViec.contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}
