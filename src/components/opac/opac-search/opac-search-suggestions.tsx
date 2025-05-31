'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSearchHistory, SearchHistoryItem } from '@/hooks/use-search-history';
import { Badge } from '@/components/ui/badge';
import Icons from '@/components/shares/icons';

interface OpacSearchSuggestionsProps {
  query: string;
  onSuggestionClick?: (suggestion: string) => void;
  autoComplete?: boolean;
  onClose?: () => void;
}

const trendingSearchesData = [
  'machine learning',
  'blockchain',
  'internet of things',
  'big data',
  'cloud computing',
];

const proposedData = [
  'Giáo trình Lập trình hướng đối tượng với Java',
  'Nhập môn Trí tuệ nhân tạo',
  'Kiến trúc máy tính và Hệ điều hành',
  'Lập trình hướng đối tượng với Java',
]

function SuggestionsData(query: string): string[] {
  return [
    `${query} cơ bản`,
    `${query} nâng cao`,
    `${query} ứng dụng`,
    `giáo trình ${query}`,
    `${query} cho người mới bắt đầu`,
  ];
}

export function OpacSearchSuggestions({
  query,
  onSuggestionClick,
  autoComplete = false,
  onClose,
}: OpacSearchSuggestionsProps) {
  const {
    getHistory,
    addHistory,
    removeHistory,
  } = useSearchHistory();
  const [recentSearches, setRecentSearches] = useState<SearchHistoryItem[]>(getHistory());
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);
  const [autoCompleteSuggestions, setAutoCompleteSuggestions] = useState<string[]>([]);

  // Cập nhật từ lịch sử tìm kiếm khi query thay đổi hoặc khi component mount
  useEffect(() => {
    setRecentSearches(getHistory());
  }, [query]);

  // Cập nhật xu hướng tìm kiếm khi recentSearches thay đổi
  useEffect(() => {
    if (recentSearches.length >= 3) {
      setTrendingSearches(recentSearches.map((item) => item.keyword));
    } else {
      setTrendingSearches(trendingSearchesData);
    }
  }, [recentSearches]);

  // Cập nhật gợi ý tự động hoàn thành
  useEffect(() => {
    if (query && autoComplete) {
      setAutoCompleteSuggestions(SuggestionsData(query));
    } else {
      setAutoCompleteSuggestions([]);
    }
  }, [query, autoComplete]);

  const handleSuggestionClick = (suggestion: string) => {
    if (onSuggestionClick) {
      onSuggestionClick(suggestion);
    }
    addHistory(suggestion);
    setRecentSearches(getHistory());
  };

  const handleRemoveSearch = (e: React.MouseEvent, id: number) => {
    console.log('removeSearch', id);
    e.stopPropagation();
    const updated = removeHistory(id);
    setRecentSearches(updated);
  };

  // Gợi ý tự động hoàn thành
  if (autoComplete && query && autoCompleteSuggestions.length > 0) {
    return (
      <Card className="z-50 mt-1 w-full border border-gray-200 shadow-lg">
        <CardContent className="p-2">
          <div className="space-y-1">
            {autoCompleteSuggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-auto w-full justify-start px-3 py-2 text-left text-sm"
                onClick={() => handleSuggestionClick(suggestion)}
                type="button"
              >
                <Icons.search className="mr-2 h-4 w-4 text-gray-400" />
                {suggestion}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const renderTrendingSearches = () => {
    return (
      <div>
        <h4 className="mb-2 flex items-center text-sm font-semibold text-gray-700">
          <Icons.trendingUp className="mr-2 h-4 w-4 text-gray-400" />
          Xu hướng tìm kiếm
        </h4>
        <div className="flex flex-wrap gap-2 sm:flex-row sm:gap-2 flex-col">
          {trendingSearches.map((search, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="h-7 border-blue-200 text-xs text-blue-600 hover:bg-blue-50 max-w-full truncate w-full sm:w-auto font-medium transition-colors"
              onClick={() => handleSuggestionClick(search)}
              type="button"
            >
              {search}
            </Button>
          ))}
        </div>
      </div>
    )
  }

  const renderProposedData = () => {
    return <div className="mt-4">
      <h4 className="mb-2 flex items-center text-sm font-semibold text-gray-700">
        <Icons.bookOpen className="mr-2 h-4 w-4 text-gray-400" />
        Tài liệu đề xuất
      </h4>
      <div className="space-y-2">
        {proposedData.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="h-auto w-full justify-start px-3 py-2 text-left text-sm text-gray-800 hover:bg-gray-50 transition-colors"
            onClick={() => handleSuggestionClick(item)}
            type="button"
          >
            <Icons.bookOpen className="mr-2 h-4 w-4 text-blue-600" />
            {item}
          </Button>
        ))}
      </div>
    </div>
  }

  return (
    <Card className="w-full border border-gray-200 shadow-lg">
      <CardContent className="px-2 py-2 sm:px-4 sm:py-2">
        {recentSearches.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-2 flex justify-between text-sm font-semibold gap-2">
              <span className="flex items-center text-gray-700">
                <Icons.clock className="mr-2 h-4 w-4 text-gray-400" />
                Tìm kiếm gần đây
              </span>
              {onClose && (
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={onClose} aria-label="Đóng gợi ý">
                  <Icons.close className="h-4 w-4" />
                </Button>
              )}
            </h4>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((item) => (
                <Badge
                  key={item.time}
                  variant="outline"
                  className="group flex h-7 items-center gap-1 px-2 py-1 text-xs max-w-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span
                    className="cursor-pointer hover:underline truncate max-w-[120px] sm:max-w-[200px] text-gray-800"
                    onClick={() => handleSuggestionClick(item.keyword)}
                  >
                    {item.keyword}
                  </span>
                  <button
                    type="button"
                    className="cursor-pointer text-gray-400 hover:text-red-500 transition-colors"
                    onClick={(e) => handleRemoveSearch(e, item.time)}
                    aria-label="Xoá lịch sử"
                  >
                    <Icons.close className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Xu hướng tìm kiếm */}
        {renderTrendingSearches()}

        {/* Tài liệu đề xuất */}
        {renderProposedData()}
      </CardContent>
    </Card>
  );
}
