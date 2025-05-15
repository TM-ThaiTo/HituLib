import DetailNews from '@/components/layouts/detail-news';
import LibraryList from '@/components/shares/library-list';
import { getIdFromSlug } from '@/lib/slug';
import { getDetailNews } from '@/services/portal-services';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default async function News({ params }: Props) {
  const id = getIdFromSlug(params.slug);
  if (!id) return notFound();

  const data = await getDetailNews(id);
  if (!data) return notFound();

  return (
    <div className="max-w-screen-container mx-auto mt-8 px-4 sm:px-6 lg:px-8 2xl:px-0">
      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <DetailNews data={data} />
        </div>

        <div className="hidden w-full lg:block lg:w-[300px]">
          <LibraryList />
        </div>
      </div>

      <div className="mt-8 block lg:hidden">
        <LibraryList />
      </div>
    </div>
  );
}
