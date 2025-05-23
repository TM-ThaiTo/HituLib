import { notFound } from 'next/navigation';
import DetailNews from '@/components/layouts/detail-news';
import { getIdFromSlug } from '@/lib/slug';
import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';
import { getDetailNewById } from '@/api/portal/api-new';

export default async function News({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const id = getIdFromSlug(slug);
  if (!id) return notFound();

  const data = await getDetailNewById(id);
  if (!data) return notFound();

  return (
    <>
      <BreadcrumbWithCustomSeparator customTitle={data?.tieuDe} />
      <DetailNews data={data} />
    </>
  );
}
