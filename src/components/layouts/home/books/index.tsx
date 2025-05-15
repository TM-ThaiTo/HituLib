import TitleLayout from '@/components/shares/title-layout';
import { BooksType } from '@/types/protal';
import Image from 'next/image';

export default function ListBooks({ books }: { books: BooksType }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <TitleLayout title="Giáo trình nội bộ" />

      <div className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
        {books.map((book) => (
          <div key={book.id} className="rounded border bg-white p-1.5 transition hover:shadow-md">
            <Image
              width={200}
              height={200}
              src={book.anhDaiDien}
              alt={book.tieuDe}
              className="h-48 w-full object-contain"
            />
            <p className="mt-2 line-clamp-2 text-sm font-medium text-gray-700">
              {book.tieuDe.trim()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
