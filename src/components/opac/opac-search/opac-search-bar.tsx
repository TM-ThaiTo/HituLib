'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icons from '@/components/shares/icons';

export default function OpacSearchBar() {
  const [search, setSearch] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = async () => {
    // Xử lý tìm kiếm ở đây (ví dụ: gọi API hoặc filter dữ liệu)

    const data = await fetch(
      `https://api.hoangkhanhcds.com/api/search/fulltext?q=${search}&page=1&pageSize=4`,
    );

    console.log('Tìm kiếm:', data);
  };

  return (
    <div className="mx-auto w-full">
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
        <div className="relative w-full">
          <span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2">
            <Icons.search className="h-4 w-4" />
          </span>
          <Input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
          />
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
