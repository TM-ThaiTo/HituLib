import { getDocumentById } from '@/constants/documents';
import { getIdFromSlug } from '@/lib/slug';
import { notFound } from 'next/navigation';
import Icons from '@/components/shares/icons';
import DocumentImageAndAction from './components/document-image-and-action';
import DocumentTabs from './components/document-tabs';

export default async function DocumentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = getIdFromSlug(slug);
  if (!id) {
    return notFound();
  }

  const document = await getDocumentById(id.toString());

  if (!document) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-10">
      {/* Title & Tags */}
      <div className="mb-6">
        <h1 className="flex-1 text-3xl font-bold">{document.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            <Icons.bookOpen className="text-sm" /> Sách in
          </span>
          {document.availability !== 'available' && (
            <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
              <Icons.timer className="text-sm" /> Đang được mượn
            </span>
          )}
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-lg md:p-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Image and Action Buttons */}
          <DocumentImageAndAction document={document} params={{ slug }} />

          {/* Main Content */}
          <DocumentTabs document={document} />
        </div>
      </div>
    </div>
  );
}
