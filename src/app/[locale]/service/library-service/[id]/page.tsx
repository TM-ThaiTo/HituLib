import { getLibraryServiceById } from '@/api/portal/api-library';
import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';
import Icons from '@/components/shares/icons';
import renderTypeNews from '@/constants/type-page';
import { notFound } from 'next/navigation';
import '@/styles/html.css';
import { getIdFromSlug } from '@/lib/slug';

export default async function LibraryServiceByIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const getID = getIdFromSlug(id);
  if (!id || !getID) return notFound();
  const data = await getLibraryServiceById(getID);

  if (!data)
    return (
      <>
        <BreadcrumbWithCustomSeparator customTitle={'Không tìm thấy dịch vụ'} />
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <span className="text-red-500">Không tìm thấy dịch vụ</span>
        </div>
      </>
    );

  return (
    <>
      <BreadcrumbWithCustomSeparator customTitle={data?.tieuDe} />
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-4 space-y-2">
          <h1 className="text-xl leading-snug font-bold text-gray-900 sm:text-2xl">
            {data.tieuDe}
          </h1>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
            <p>Ngày đăng: {new Date(data.ngayTao).toLocaleDateString('vi-VN')}</p>
            <span className="hidden sm:inline">|</span>
            <div className="flex items-center gap-1">
              <Icons.news className="h-4 w-4 text-gray-500" />
              <span>{renderTypeNews(7)}</span>
            </div>
          </div>

          <hr className="border-gray-200" />
        </div>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: data.noiDung }}
        />

        <p className="mt-8 text-right text-sm text-gray-500">
          Ngày tạo: {new Date(data.ngayTao).toLocaleDateString('vi-VN')}
        </p>
      </div>
    </>
  );
}
