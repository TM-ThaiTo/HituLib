const STORAGE_KEY = 'opac_search_history';

export type SearchHistoryItem = {
  keyword: string;
  time: number;
};

export function useSearchHistory() {
  const getHistory = (): SearchHistoryItem[] => {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const addHistory = (keyword: string) => {
    if (!keyword) return;
    const history = getHistory();
    const newHistory = [
      { keyword, time: Date.now() },
      ...history.filter((item) => item.keyword !== keyword),
    ].slice(0, 10);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
  };

  const removeHistory = (time: number): SearchHistoryItem[] => {
    const history = getHistory();
    const newHistory = history.filter((item) => item.time !== time);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
    return newHistory;
  };

  const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  return { getHistory, addHistory, removeHistory, clearHistory };
}
