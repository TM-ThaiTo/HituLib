'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

const STORAGE_KEY = 'opac-search-history';
const MAX_HISTORY_ITEMS = 20;

export interface SearchHistoryItem {
  query: string;
  timestamp: number;
  source?: string;
  field?: string;
}

export function useSearchHistory() {
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load search history from localStorage on component mount
  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(STORAGE_KEY);
      if (storedHistory) {
        setSearchHistory(JSON.parse(storedHistory));
      }
    } catch (error) {
      console.error('Error loading search history:', error);
      // Fallback to empty array if there's an error
      setSearchHistory([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save search to history
  const addToHistory = useCallback((query: string, source?: string, field?: string) => {
    if (!query.trim()) return;

    setSearchHistory((prevHistory) => {
      // Remove any existing entries with the same query
      const filteredHistory = prevHistory.filter(
        (item) => item.query.toLowerCase() !== query.toLowerCase(),
      );

      // Add new search to the beginning of the array
      const newHistory = [
        {
          query,
          timestamp: Date.now(),
          source,
          field,
        },
        ...filteredHistory,
      ].slice(0, MAX_HISTORY_ITEMS); // Limit the history size

      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
      } catch (error) {
        console.error('Error saving search history:', error);
      }

      return newHistory;
    });
  }, []);

  // Clear all search history
  const clearHistory = useCallback(() => {
    setSearchHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Remove a specific search from history
  const removeFromHistory = useCallback((query: string) => {
    setSearchHistory((prevHistory) => {
      const newHistory = prevHistory.filter(
        (item) => item.query.toLowerCase() !== query.toLowerCase(),
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  }, []);

  // Get recent searches (most recent first)
  const getRecentSearches = useCallback(
    (limit = 5) => {
      return searchHistory
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, limit)
        .map((item) => item.query);
    },
    [searchHistory],
  );

  // Get popular searches (most frequently used)
  const getPopularSearches = useCallback(
    (limit = 5) => {
      const queryCounts = searchHistory.reduce(
        (acc, item) => {
          const query = item.query.toLowerCase();
          acc[query] = (acc[query] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>,
      );

      return Object.entries(queryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
        .map(([query]) => query);
    },
    [searchHistory],
  );

  // Memoize the recent and popular searches
  const recentSearches = useMemo(() => getRecentSearches(5), [getRecentSearches]);
  const popularSearches = useMemo(() => getPopularSearches(5), [getPopularSearches]);

  return {
    searchHistory,
    isLoaded,
    addToHistory,
    clearHistory,
    removeFromHistory,
    getRecentSearches,
    getPopularSearches,
    recentSearches,
    popularSearches,
  };
}
