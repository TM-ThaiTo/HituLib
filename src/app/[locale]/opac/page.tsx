import OpacCardSearch from '@/components/opac/opac-card-search';
import OpacDocumentLatest from '@/components/opac/opac-document-latest';
import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';

export default async function OpacMainPage() {
  return (
    <>
      <BreadcrumbWithCustomSeparator />

      <div className="max-w-screen-container mt-4 flex min-h-screen">
        <main className="flex-1 bg-gray-50">
          <div className="">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-blue-600">Thư viện trực tuyến</h1>
              <p className="mx-auto max-w-2xl text-gray-600">
                Tìm kiếm, khám phá và truy cập hàng ngàn tài liệu học thuật, sách, tạp chí và tài
                nguyên giáo dục mở từ nhiều nguồn khác nhau.
              </p>
            </div>
            <OpacCardSearch />
            <OpacDocumentLatest />
          </div>
        </main>
      </div>
    </>
  );
}
