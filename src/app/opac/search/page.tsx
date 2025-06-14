'use client';

import { useSearchParams } from 'next/navigation';
import OpacCardSearch from '@/components/opac/opac-card-search';
import OpacSearchBarSelect from '@/components/opac/opac-search-document/opac-search-bar-select';

export default function OpacSearchPage() {
  const searchParams = useSearchParams();
  const p = searchParams.get('p') || '';
  const filtersParam = searchParams.get('filters');

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
              <h3>Raw Filters JSON:</h3>
              {filters ? (
                <pre className="overflow-x-auto rounded bg-gray-100 p-2 text-sm">
                  {JSON.stringify(filters, null, 2)}
                </pre>
              ) : (
                <p>Could not parse filters.</p>
              )}
            </div>
          )}
          {filters && (
            <div>
              <h3>Applied Filters:</h3>
              <p>
                <strong>Category:</strong> {filters.category}
              </p>
              {filters.author && (
                <p>
                  <strong>Author:</strong> {filters.author}
                </p>
              )}
              {filters.yearRange && (
                <p>
                  <strong>Year Range:</strong> {filters.yearRange[0]} - {filters.yearRange[1]}
                </p>
              )}
              {filters.documentTypes && filters.documentTypes.length > 0 && (
                <p>
                  <strong>Document Types:</strong> {filters.documentTypes.join(', ')}
                </p>
              )}
              {filters.accessType && (
                <p>
                  <strong>Access Type:</strong> {filters.accessType}
                </p>
              )}
              {filters.keywordFilters && filters.keywordFilters.length > 0 && (
                <div>
                  <p>
                    <strong>Keyword Filters:</strong>
                  </p>
                  <ul>
                    {filters.keywordFilters.map((kf: any, index: number) => (
                      <li key={index}>
                        Field: {kf.field}, Keyword: {kf.keyword}
                        {kf.logic && `, Logic: ${kf.logic}`}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          {!filters && filtersParam && <p className="text-red-500">Error loading filters.</p>}
        </div>
      </div>
    </div>
  );
}
