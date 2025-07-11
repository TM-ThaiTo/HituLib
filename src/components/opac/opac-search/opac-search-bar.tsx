'use client';

import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icons from '@/components/shares/icons';
import { useSearchHistory } from '@/hooks/use-search-history';
import { OpacSearchSuggestions } from './opac-search-suggestions';
import { useRouter } from '@/hooks/use-router';
import OpacAdvancedFilters from './opac-advanced-filters';
import { useTranslations } from 'next-intl';

export default function OpacSearchBar() {
  const t = useTranslations('opac.search');

  const router = useRouter();
  const [search, setSearch] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addHistory } = useSearchHistory();

  const handleSearch = async () => {
    if (!search.trim()) return;
    addHistory(search.trim());
    setShowSuggestions(false);
    const searchWithPlus = search.replace(/ /g, '+');
    router.push(
      `/opac/search?p=${searchWithPlus}${advancedFilters ? `&filters=${advancedFilters}` : ''}`,
    );
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!inputRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!inputRef.current.parentElement?.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    if (showSuggestions) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showSuggestions]);

  return (
    <div className="mx-auto w-full">
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
        <div className="relative w-full">
          <span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2">
            <Icons.search className="h-4 w-4" />
          </span>
          <Input
            ref={inputRef}
            type="text"
            placeholder={t('placeholder')}
            value={search}
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => setSearch(e.target.value)}
            className="pr-9 pl-9"
            autoComplete="off"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
          />
          {search && (
            <button
              type="button"
              className="text-muted-foreground hover:text-destructive absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer focus:outline-none"
              onClick={() => setSearch('')}
              tabIndex={-1}
            >
              <Icons.close className="h-4 w-4" />
            </button>
          )}
          {showSuggestions && (
            <div className="absolute top-full right-0 left-0 z-10 mt-1">
              <OpacSearchSuggestions
                query={search}
                onSuggestionClick={(suggestion) => {
                  setSearch(suggestion);
                  setShowSuggestions(false);
                }}
                autoComplete={!!search}
                onClose={() => setShowSuggestions(false)}
              />
            </div>
          )}
        </div>
        <Button
          onClick={handleSearch}
          className="bg-primary hover:bg-primary/90 flex w-full cursor-pointer items-center gap-1 text-white sm:w-auto"
        >
          <Icons.search className="h-4 w-4" />
          <span className="hidden sm:inline">{t('search_button')}</span>
        </Button>

        <Button
          variant="outline"
          onClick={() => setShowAdvanced((v) => !v)}
          className="flex w-full cursor-pointer items-center gap-1 sm:w-auto"
        >
          <Icons.slidersHorizontal className="h-4 w-4" />
          <span className="hidden sm:inline">{t('advanced_filters_button')}</span>
        </Button>
      </div>

      <OpacAdvancedFilters showAdvanced={showAdvanced} />
    </div>
  );
}
