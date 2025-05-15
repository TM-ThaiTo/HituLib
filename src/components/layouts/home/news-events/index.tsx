import Image from 'next/image';
import TitleLayout from '@/components/shares/title-layout';
import { NewEventsType } from '@/types/protal';
import Link from 'next/link';
import { mapSlugWithId } from '@/lib/slug';

export default function NewsEventsLayout({ newEvents }: { newEvents: NewEventsType }) {
  return (
    // <div className="max-w-[1074px] rounded-lg bg-white p-9 shadow-sm">
    <div className="max-w-[1074px] rounded-lg bg-white p-4 sm:p-6 md:p-9 shadow-sm">

      <TitleLayout title="Tin tức & Sự kiện" />

      <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {newEvents.map((item) => (
          <div
            key={item.id}
            className="group flex gap-4 rounded-lg border border-gray-100 bg-white p-3 transition-all duration-300"
          >
            <div className="flex-shrink-0">
              <Link href={`${mapSlugWithId(item.tieuDe, item.id)}`}>
                <Image
                  width={112}
                  height={80}
                  src={item.anhDaiDien}
                  alt={item.tieuDe}
                  className="h-20 w-28 sm:h-24 sm:w-32 object-cover transform rounded-md transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            <div className="flex-1">
              <Link href={`${mapSlugWithId(item.tieuDe, item.id)}`}>
                <div className="cursor-pointer text-base font-medium transition-colors duration-300 group-hover:text-blue-600">
                  {item.tieuDe}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
