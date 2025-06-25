'use client';

import { useSearchParams } from 'next/navigation';
import OpacCardSearch from '@/components/opac/opac-card-search';
import OpacSearchBarSelect from '@/components/opac/opac-search-document/opac-search-bar-select';
import { useTranslations } from 'next-intl';

export default function OpacSearchPage() {
  const searchParams = useSearchParams();
  const p = searchParams.get('p') || '';
  const filtersParam = searchParams.get('filters');
  const t = useTranslations('opac.search');

  let filters = null;
  if (filtersParam) {
    try {
      const decodedFilters = decodeURIComponent(filtersParam);
      filters = JSON.parse(decodedFilters);
    } catch (error) {
      console.error('Error parsing filters:', error);
    }
  }

  return (
    <div className="max-w-screen-container sm:px-6 lg:px-8">
      <OpacCardSearch />

      <div className="flex">
        <div className="mr-4 w-64">
          <OpacSearchBarSelect filters={filters} q={p} />
        </div>

        <div className="flex-grow">
          {filtersParam && (
            <div>
              <h3>{t('debug.raw_filters')}</h3>
              {filters ? (
                <pre className="overflow-x-auto rounded bg-gray-100 p-2 text-sm">
                  {JSON.stringify(filters, null, 2)}
                </pre>
              ) : (
                <p>{t('debug.parse_error')}</p>
              )}
            </div>
          )}
          {filters && (
            <div>
              <h3>{t('debug.applied_filters')}</h3>
              <p>
                <strong>{t('debug.category')}</strong> {filters.category}
              </p>
              {filters.author && (
                <p>
                  <strong>{t('debug.author')}</strong> {filters.author}
                </p>
              )}
              {filters.yearRange && (
                <p>
                  <strong>{t('debug.year_range')}</strong> {filters.yearRange[0]} - {filters.yearRange[1]}
                </p>
              )}
              {filters.documentTypes && filters.documentTypes.length > 0 && (
                <p>
                  <strong>{t('debug.document_types')}</strong> {filters.documentTypes.join(', ')}
                </p>
              )}
              {filters.accessType && (
                <p>
                  <strong>{t('debug.access_type')}</strong> {filters.accessType}
                </p>
              )}
              {filters.keywordFilters && filters.keywordFilters.length > 0 && (
                <div>
                  <p>
                    <strong>{t('debug.keyword_filters')}</strong>
                  </p>
                  <ul>
                    {filters.keywordFilters.map((kf: any, index: number) => (
                      <li key={index}>
                        {t('debug.field')}: {kf.field}, {t('debug.keyword')}: {kf.keyword}
                        {kf.logic && `, ${t('debug.logic')}: ${kf.logic}`}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          {!filters && filtersParam && <p className="text-red-500">{t('debug.load_error')}</p>}
        </div>
      </div>
    </div>
  );
}
