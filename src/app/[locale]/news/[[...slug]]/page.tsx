import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import DetailNews from '@/components/layouts/detail-news';
import { getIdFromSlug } from '@/lib/slug';
import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';
import { getDetailNewById } from '@/api/portal/api-new';
import { ContentLoading } from './loading';
import NewsEventsLayout from '@/components/layouts/home/news-events';

async function NewsContent({ id }: { id: number }) {
  const data = await getDetailNewById(id);
  if (!data) return notFound();

  return (
    <>
      <BreadcrumbWithCustomSeparator customTitle={data?.tieuDe} />
      <DetailNews data={data} />
      <Suspense fallback={<div className="mt-12 h-[200px] animate-pulse rounded-lg bg-gray-300" />}>
        <NewsEventsLayout />
      </Suspense>
    </>
  );
}

export default async function NewsPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const lastSegment = slug?.[slug.length - 1] ?? '';
  const id = getIdFromSlug(lastSegment);

  if (!id) return notFound();

  return (
    <Suspense fallback={<ContentLoading />}>
      <NewsContent id={id} />
    </Suspense>
  );
}
