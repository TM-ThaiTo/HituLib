'use client';

import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icons from '@/components/shares/icons';
import { useSearchHistory } from '@/hooks/use-search-history';
import { OpacSearchSuggestions } from './opac-search-suggestions';

export default function OpacSearchBar() {
  const [search, setSearch] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addHistory } = useSearchHistory();

  const handleSearch = async () => {
    if (!search.trim()) return;
    addHistory(search.trim());
    setShowSuggestions(false);
    console.log('Tìm kiếm:', search);
    // Xử lý tìm kiếm ở đây (ví dụ: gọi API hoặc filter dữ liệu)
    // const data = await fetch(
    //   `https://api.hoangkhanhcds.com/api/search/fulltext?q=${search}&page=1&pageSize=4`,
    // );
    // console.log('Tìm kiếm:', data);
  };

  // Đóng gợi ý khi click ra ngoài
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
            placeholder="Nhập từ khóa tìm kiếm..."
            value={search}
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-9"
            autoComplete="off"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
          />
          {search && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive cursor-pointer focus:outline-none"
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
                  // Nếu muốn tự động tìm kiếm khi chọn gợi ý:
                  // handleSearch();
                }}
                autoComplete={!!search}
                onClose={() => setShowSuggestions(false)}
              />
            </div>
          )}
        </div>
        <Button
          onClick={handleSearch}
          className="bg-primary hover:bg-primary/90 flex w-full items-center gap-1 text-white sm:w-auto"
        >
          <Icons.search className="h-4 w-4" />
          Tìm kiếm
        </Button>
        <Button
          variant="outline"
          onClick={() => setShowAdvanced((v) => !v)}
          className="flex w-full items-center gap-1 sm:w-auto"
        >
          <Icons.slidersHorizontal className="h-4 w-4" />
          Bộ lọc nâng cao
        </Button>
      </div>
      {showAdvanced && (
        <div className="bg-muted mt-4 rounded border p-4">
          {/* Thêm các trường bộ lọc nâng cao ở đây */}
          <span className="text-muted-foreground text-sm">Bộ lọc nâng cao (placeholder)</span>
        </div>
      )}
    </div>
  );
}
