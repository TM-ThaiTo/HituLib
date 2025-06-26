'use client';

import OptimizedImage from '@/lib/image';
import { getListDocument } from '@/constants/documents';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useEffect } from 'react';
import TitleLayout from '@/components/shares/title-layout';
import { mapSlugWithId } from '@/lib/slug';
import CustomLink from '@/hooks/next-link';
import { useTranslations } from 'next-intl';

export default function OpacDocumentLatest() {
  const [documents, setDocuments] = useState<any[]>([]);
  const t = useTranslations('routes.opac.document_latest');

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getListDocument();
      setDocuments(docs.slice(0, 4)); // Show first 4 documents initially
    };
    fetchDocuments();
  }, []);

  const handleShowAll = async () => {
    const allDocuments = await getListDocument(); // Get all documents from API
    setDocuments(allDocuments); // Update state to show all documents
  };

  function mapSlug(title: string, id: number) {
    return mapSlugWithId(title, id, 'opac/document');
  }

  return (
    <div className="mb-8 rounded-lg bg-[var(--card)] p-6 shadow-sm">
      <TitleLayout title={t('title')} />

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {documents.map((doc) => (
          <CustomLink href={mapSlug(doc.title, doc.id)} key={doc.id} className="group block">
            <div className="flex h-full flex-col rounded-md border border-[var(--border)] p-4 transition-colors hover:border-[var(--primary)] hover:bg-[var(--primary)]/10">
              <div className="mb-4 flex h-48 w-full justify-center">
                <OptimizedImage
                  src={doc.coverImage}
                  alt={doc.title}
                  className="h-full w-full rounded-md border border-[var(--border)] object-cover"
                />
              </div>
              <div className="flex flex-grow flex-col justify-between">
                <h3 className="mb-2 line-clamp-2 text-center font-medium text-[var(--primary)] group-hover:underline">
                  {doc.title}
                </h3>
                <p className="mb-4 text-center text-sm text-[var(--muted-foreground)]">
                  {doc.authors.join(', ')}
                </p>
              </div>
            </div>
          </CustomLink>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button variant="outline" onClick={handleShowAll}>
          {t('view_all')}
        </Button>
      </div>
    </div>
  );
}
