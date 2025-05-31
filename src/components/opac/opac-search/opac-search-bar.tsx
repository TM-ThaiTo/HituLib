'use client';

import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icons from '@/components/shares/icons';
import { useSearchHistory } from '@/hooks/use-search-history';
import { OpacSearchSuggestions } from './opac-search-suggestions';
import { useRouter } from '@/hooks/use-router';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { SliderRange, SliderThumb } from '@radix-ui/react-slider';
import { SliderTrack } from '@radix-ui/react-slider';
import OpacAdvancedFilters from './opac-advanced-filters';

export default function OpacSearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addHistory } = useSearchHistory();

  // Advanced filter states
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [category, setCategory] = useState('all');
  const [author, setAuthor] = useState('');
  const [yearRange, setYearRange] = useState<[number, number]>([2000, 2020]);

  // Fetch categories for advanced filter
  useEffect(() => {
    if (showAdvanced) {
      fetch('/api/search/document-categories')
        .then((res) => res.json())
        .then((data) => setCategories(data.categories || []));
    }
  }, [showAdvanced]);

  const handleSearch = async () => {
    if (!search.trim()) return;
    addHistory(search.trim());
    setShowSuggestions(false);
    const submitCategory = category === 'all' ? '' : category;
    if (showAdvanced) {
      // Gọi API nâng cao
      const res = await fetch('/api/search/fulltext/advanced', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          q: search,
          category: submitCategory,
          author,
          yearFrom: yearRange[0],
          yearTo: yearRange[1],
        }),
      });
      const data = await res.json();
      console.log('Kết quả nâng cao:', data);
      // Có thể điều hướng hoặc hiển thị kết quả tuỳ ý
    } else {
      // Gọi API thường
      const searchWithPlus = search.replace(/ /g, '+');
      router.push(`/opac/search?p=${searchWithPlus}`);
    }
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

  // const renderAdvancedFilter = () => {
  //   return (
  //     <>
  //       {showAdvanced && (
  //         <div className="bg-muted mt-4 rounded border p-4 flex flex-col gap-4">
  //           <div className="flex flex-col sm:flex-row gap-4">
  //             <div className="flex-1">
  //               <Label htmlFor="category">Danh mục</Label>
  //               <Select value={category} onValueChange={setCategory}>
  //                 <SelectTrigger id="category" className="w-full mt-1">
  //                   <SelectValue placeholder="Tất cả" />
  //                 </SelectTrigger>
  //                 <SelectContent>
  //                   <SelectItem value="all">Tất cả</SelectItem>
  //                   {categories.map((cat) => (
  //                     <SelectItem key={cat.id} value={String(cat.id)}>{cat.name}</SelectItem>
  //                   ))}
  //                 </SelectContent>
  //               </Select>
  //             </div>
  //             <div className="flex-1">
  //               <Label htmlFor="author">Tác giả</Label>
  //               <Input
  //                 id="author"
  //                 value={author}
  //                 onChange={e => setAuthor(e.target.value)}
  //                 placeholder="Nhập tên tác giả"
  //                 className="mt-1"
  //               />
  //             </div>
  //           </div>

  //           <div className="flex-1 flex flex-col">
  //             <Label htmlFor="year">Năm xuất bản</Label>
  //             <div className="flex items-center mt-1 mb-2">
  //               <Icons.calendar className="h-4 w-4 mr-1 text-gray-500" />
  //               <span className="text-sm text-muted-foreground">Từ năm: <b>{yearRange[0]} đến {yearRange[1]}</b></span>
  //             </div>
  //             <Slider
  //               id="year"
  //               min={1800}
  //               max={2025}
  //               step={1}
  //               value={yearRange}
  //               defaultValue={[1800, 2025]}
  //               onValueChange={(vals) => setYearRange([vals[0], vals[1]])}
  //               className="w-full"
  //             />
  //             <div className="flex justify-between text-sm text-muted-foreground mt-2">
  //               <span>{1800}</span>
  //               <span>{2025}</span>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </>
  //   )
  // }

  const handleAdvancedFilters = (filters: any) => {
    console.log('Applied filters:', filters);
    setShowAdvanced(false);

    // Thực hiện tìm kiếm với bộ lọc nâng cao
    // if (onSearch) {
    //   onSearch({
    //     query,
    //     source: activeTab,
    //     ...filters,
    //   })
    // }
  };

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

      <OpacAdvancedFilters
        showAdvanced={showAdvanced}
        categories={categories}
        onApply={handleAdvancedFilters}
      />
      {/* {showAdvanced && renderAdvancedFilter()} */}
    </div>
  );
}
