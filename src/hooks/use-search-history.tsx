'use client';

import { useState, useEffect } from 'react';

interface SearchHistoryItem {
  query: string;
  timestamp: number;
  source?: string;
  field?: string;
}

export function useSearchHistory() {
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);

  useEffect(() => {
    // Lấy lịch sử tìm kiếm từ localStorage khi component mount
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      try {
        setSearchHistory(JSON.parse(storedHistory));
      } catch (error) {
        console.error('Error parsing search history:', error);
        setSearchHistory([]);
      }
    }
  }, []);

  const addToHistory = (item: SearchHistoryItem) => {
    // Thêm timestamp nếu không có
    const newItem = {
      ...item,
      timestamp: item.timestamp || Date.now(),
    };

    // Thêm vào đầu danh sách và giới hạn số lượng
    setSearchHistory((prev) => {
      // Loại bỏ các mục trùng lặp (cùng query và source)
      const filteredHistory = prev.filter(
        (h) => !(h.query === newItem.query && h.source === newItem.source),
      );

      // Thêm mục mới vào đầu danh sách
      const newHistory = [newItem, ...filteredHistory].slice(0, 20);

      // Lưu vào localStorage
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));

      return newHistory;
    });
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  return { searchHistory, addToHistory, clearHistory };
}
