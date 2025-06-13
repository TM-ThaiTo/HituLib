'use client';

import Link from 'next/link';
import OptimizedImage from '@/lib/image';
import { getListDocument } from '@/constants/documents';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useEffect } from 'react';
import TitleLayout from '@/components/shares/title-layout';
import { mapSlugWithId } from '@/lib/slug';

export default function OpacDocumentLatest() {
  const [documents, setDocuments] = useState<any[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getListDocument();
      setDocuments(docs.slice(0, 4)); // Hiển thị 4 tài liệu đầu tiên ban đầu
    };
    fetchDocuments();
  }, []);
  const handleShowAll = async () => {
    const allDocuments = await getListDocument(); // Lấy tất cả tài liệu từ API
    setDocuments(allDocuments); // Cập nhật state để hiển thị tất cả tài liệu
  };

  function mapSlug(title: string, id: number) {
    return mapSlugWithId(title, id, 'opac/document');
  }

  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
      <TitleLayout title="Giáo trình nội bộ" />

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {documents.map((doc) => (
          <Link href={mapSlug(doc.title, doc.id)} key={doc.id} className="group block">
            <div className="flex h-full flex-col rounded-md border p-4 transition-colors hover:border-blue-300 hover:bg-blue-50/30">
              <div className="mb-4 flex h-48 w-full justify-center">
                <OptimizedImage
                  src={doc.coverImage}
                  alt={doc.title}
                  className="h-full w-full rounded-md border border-gray-200 object-cover"
                />
              </div>
              <div className="flex flex-grow flex-col justify-between">
                <h3 className="mb-2 line-clamp-2 text-center font-medium text-blue-600 group-hover:underline">
                  {doc.title}
                </h3>
                <p className="mb-4 text-center text-sm text-gray-500">{doc.authors.join(', ')}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button variant="outline" onClick={handleShowAll}>
          Xem tất cả
        </Button>
      </div>
    </div>
  );
}
