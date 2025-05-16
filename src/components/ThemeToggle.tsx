'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      className="rounded-full border border-gray-200 p-2 text-[var(--foreground)] shadow-sm transition-all duration-300 hover:bg-[var(--accent)]/[0.2] hover:text-[var(--accent)] hover:shadow-md"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {/* Chỉ hiển thị icon khi đã mounted */}
      {mounted ? (
        theme === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )
      ) : (
        <div className="h-5 w-5" /> // giữ kích thước icon để tránh layout shift
      )}
    </button>
  );
}
