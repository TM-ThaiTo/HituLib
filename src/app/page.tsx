import { getBanners } from '@/api/portal/api-banner';
import Banner from '@/components/layouts/home/banner';
// import OpacDocumentLatest from '@/components/layouts/home/books';
import NewsEventsLayout from '@/components/layouts/home/news-events';
import OpacDocumentLatest from '@/components/opac/opac-document-latest';
import LibraryList from '@/components/shares/library-list';
import { banners, books } from '@/constants/home';

export default async function Home() {
  const dataBanner = await getBanners();
  const data = dataBanner && dataBanner.length > 0 ? dataBanner : banners;

  return (
    <div className="max-w-screen-container mx-auto mt-8 px-4 sm:px-6 lg:px-8 2xl:px-0">
      <div className="mt-4 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <Banner banners={data} />
          <NewsEventsLayout />
        </div>

        <div className="w-full lg:w-[300px]">
          <LibraryList />
        </div>
      </div>

      <div className="mt-12">
        {/* <ListBooks books={books} /> */}
        {/* <OpacDocumentLatest /> */}
        <OpacDocumentLatest />
      </div>
    </div>
  );
}
