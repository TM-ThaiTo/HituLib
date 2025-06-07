'use client';
import type React from 'react';
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSearchHistory, SearchHistoryItem } from '@/hooks/use-search-history';
import Icons from '@/components/shares/icons';

export default function OpacSearchSelectSuggest() {
  const { getHistory, clearHistory } = useSearchHistory();
  const [recentSearches, setRecentSearches] = useState<SearchHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRecentSearches(getHistory());
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center text-sm font-semibold text-gray-800">
          <Icons.clock className="mr-2 h-4 w-4 text-gray-500" />
          Lịch sử tìm kiếm
        </span>
        {!loading && recentSearches.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="cursor-pointer text-xs text-red-600 hover:text-red-600 hover:underline"
            onClick={() => {
              clearHistory();
              setRecentSearches([]);
            }}
          >
            Xoá tất cả
          </Button>
        )}
      </div>

      {loading ? (
        <div className="flex h-24 items-center justify-center">
          <Icons.loader className="h-5 w-5 animate-spin text-gray-500" />
          <span className="ml-2 text-sm text-gray-500">Đang tải...</span>
        </div>
      ) : recentSearches.length > 0 ? (
        <div className="max-h-60 space-y-2 overflow-y-auto pr-1">
          {recentSearches.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-lg border bg-white px-4 py-3 shadow-sm transition-all hover:border-blue-500 hover:bg-blue-50"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-1 items-center overflow-hidden">
                  <Icons.search className="mr-2 h-4 w-4 shrink-0 text-blue-600" />
                  <span className="truncate text-sm font-medium text-gray-800">{item.keyword}</span>
                </div>
                <span className="text-xs whitespace-nowrap text-gray-500 transition-colors group-hover:text-blue-600">
                  {new Date(item.time).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Chưa có lịch sử tìm kiếm.</p>
        </div>
      )}
    </Card>
  );
}
