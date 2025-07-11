'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSearchHistory, SearchHistoryItem } from '@/hooks/use-search-history';
import { Badge } from '@/components/ui/badge';
import Icons from '@/components/shares/icons';
import { TRENDING_SEARCH_DATA, PROPOSED_DATA, SUGGESTION_DATA } from '@/constants/opac-search';
import { useTranslations } from 'next-intl';

interface OpacSearchSuggestionsProps {
  query: string;
  onSuggestionClick?: (suggestion: string) => void;
  autoComplete?: boolean;
  onClose?: () => void;
}

// TODO: COMPONENT SUGGESTIONS: xử lý gợi ý tìm kiếm
export function OpacSearchSuggestions({
  query,
  onSuggestionClick,
  autoComplete = false,
  onClose,
}: OpacSearchSuggestionsProps) {
  const { getHistory, addHistory, removeHistory } = useSearchHistory();
  const [recentSearches, setRecentSearches] = useState<SearchHistoryItem[]>(getHistory());
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);
  const [autoCompleteSuggestions, setAutoCompleteSuggestions] = useState<string[]>([]);
  const t = useTranslations('opac.search.suggestions');

  // Cập nhật từ lịch sử tìm kiếm khi query thay đổi hoặc khi component mount
  useEffect(() => {
    setRecentSearches(getHistory());
  }, [query]);

  // Cập nhật xu hướng tìm kiếm khi recentSearches thay đổi
  useEffect(() => {
    if (recentSearches.length >= 3) {
      setTrendingSearches(recentSearches.map((item) => item.keyword));
    } else {
      setTrendingSearches(TRENDING_SEARCH_DATA);
    }
  }, [recentSearches]);

  // Cập nhật gợi ý tự động hoàn thành
  useEffect(() => {
    if (query && autoComplete) {
      setAutoCompleteSuggestions(SUGGESTION_DATA(query));
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
          {t('trending_searches')}
        </h4>
        <div className="flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-2">
          {trendingSearches.map((search, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="h-7 w-full max-w-full truncate border-blue-200 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-50 sm:w-auto"
              onClick={() => handleSuggestionClick(search)}
              type="button"
            >
              {search}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  const renderProposedData = () => {
    return (
      <div className="mt-4">
        <h4 className="mb-2 flex items-center text-sm font-semibold text-gray-700">
          <Icons.bookOpen className="mr-2 h-4 w-4 text-gray-400" />
          {t('proposed_documents')}
        </h4>
        <div className="space-y-2">
          {PROPOSED_DATA.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-auto w-full justify-start px-3 py-2 text-left text-sm text-gray-800 transition-colors hover:bg-gray-50"
              onClick={() => handleSuggestionClick(item)}
              type="button"
            >
              <Icons.bookOpen className="mr-2 h-4 w-4 text-blue-600" />
              {item}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full border border-gray-200 shadow-lg">
      <CardContent className="px-2 py-2 sm:px-4 sm:py-2">
        {recentSearches.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-2 flex justify-between gap-2 text-sm font-semibold">
              <span className="flex items-center text-gray-700">
                <Icons.clock className="mr-2 h-4 w-4 text-gray-400" />
                {t('recent_searches')}
              </span>
              {onClose && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={onClose}
                  aria-label={t('close_suggestions')}
                >
                  <Icons.close className="h-4 w-4" />
                </Button>
              )}
            </h4>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((item) => (
                <Badge
                  key={item.time}
                  variant="outline"
                  className="group flex h-7 max-w-full items-center gap-1 border border-gray-200 bg-white px-2 py-1 text-xs transition-colors hover:bg-gray-50"
                >
                  <span
                    className="max-w-[120px] cursor-pointer truncate text-gray-800 hover:underline sm:max-w-[200px]"
                    onClick={() => handleSuggestionClick(item.keyword)}
                  >
                    {item.keyword}
                  </span>
                  <button
                    type="button"
                    className="cursor-pointer text-gray-400 transition-colors hover:text-red-500"
                    onClick={(e) => handleRemoveSearch(e, item.time)}
                    aria-label={t('remove_history')}
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
