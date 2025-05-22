import CustomLink from '@/hooks/next-link';
import { mapSlugWithId } from '@/lib/slug';
import Image from 'next/image';

type Props = {
  tieuDe: string;
  id: number;
  anhDaiDien: string;
  moTa: string | null;
  rel?: string;
};

export default function ItemCategory({ tieuDe, id, anhDaiDien, moTa, rel }: Props) {
  return (
    <>
      <div className="group flex gap-4 rounded-lg border border-gray-100 bg-white p-3 transition-all duration-300">
        <div className="flex-shrink-0">
          <CustomLink href={mapSlugWithId(tieuDe, id, rel)}>
            <Image
              width={200}
              height={120}
              src={anhDaiDien}
              alt={tieuDe}
              className="h-[120px] w-[200px] transform rounded-md transition-transform duration-300 group-hover:scale-105"
            />
          </CustomLink>
        </div>
        <div className="p-2">
          <CustomLink href={`${mapSlugWithId(tieuDe, id)}`}>
            <div className="cursor-pointer text-base font-bold transition-colors duration-300 group-hover:text-blue-600">
              {tieuDe}
            </div>
          </CustomLink>
          <div className="mt-2 line-clamp-3 text-base font-light transition-colors duration-300">
            {moTa}
          </div>
        </div>
      </div>
    </>
  );
}
