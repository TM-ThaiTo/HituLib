import Image from 'next/image';
import TitleLayout from '@/components/shares/title-layout';
import CustomLink from '@/hooks/next-link';
import { mapSlugWithId } from '@/lib/slug';
import { mapImagePath } from '@/lib/utils';
import { getNews } from '@/services/portal-services';
import { newEvents } from '@/constants/home';

export default async function NewsEventsLayout() {
  const dataNewsEvents = await getNews();
  const data = dataNewsEvents ? dataNewsEvents : newEvents;

  return (
    <div className="max-w-[1074px] rounded-lg bg-white p-4 shadow-sm sm:p-6 md:p-9">
      <TitleLayout title="Tin tức & Sự kiện" />

      <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="group flex gap-4 rounded-lg border border-gray-100 bg-white p-3 transition-all duration-300"
          >
            <div className="flex-shrink-0">
              <CustomLink href={`${mapSlugWithId(item.tieuDe, item.id)}`}>
                <Image
                  width={112}
                  height={80}
                  // src={item.anhDaiDien}
                  src={mapImagePath(item.anhDaiDien)}
                  alt={item.tieuDe}
                  className="h-[80px] w-[112px] transform rounded-md object-cover transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-32"
                />
              </CustomLink>
            </div>

            <div className="flex-1">
              <CustomLink href={`${mapSlugWithId(item.tieuDe, item.id)}`}>
                <div className="cursor-pointer text-base font-medium transition-colors duration-300 group-hover:text-blue-600">
                  {item.tieuDe}
                </div>
              </CustomLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
