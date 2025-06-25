import OpacCardSearch from '@/components/opac/opac-card-search';
import OpacDocumentLatest from '@/components/opac/opac-document-latest';
import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';
import { getTranslations } from 'next-intl/server';

export default async function OpacMainPage() {
  const t = await getTranslations('opac');

  return (
    <>
      <BreadcrumbWithCustomSeparator />

      <div className="max-w-screen-container mt-4 flex min-h-screen">
        <main className="flex-1 bg-gray-50">
          <div className="">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-blue-600">{t('title')}</h1>
              <p className="mx-auto max-w-2xl text-gray-600">{t('description')}</p>
            </div>
            <OpacCardSearch />
            <OpacDocumentLatest />
          </div>
        </main>
      </div>
    </>
  );
}
