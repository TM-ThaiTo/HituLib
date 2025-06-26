'use client';

import { useState } from 'react';
import Icons from '@/components/shares/icons';
import { IconButtonClose, IconButtonSearch } from './icon-button';
import { useRouter } from 'next/navigation';

export default function SearchButton() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      router.push(`/search?s=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative flex items-center">
      <div
        className="group relative flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--primary)]"
        onClick={handleSearchToggle}
      >
        <Icons.search
          size={17}
          color="var(--primary-foreground)"
          className="absolute transform transition-all duration-300"
        />
      </div>

      {isSearchOpen && (
        <form
          onSubmit={handleSubmit}
          className="absolute top-full right-0 z-10 mt-2 flex items-center border border-[var(--border)] bg-[var(--card)] p-2 shadow-md"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-52 rounded-sm px-2 py-1 outline-none"
          />
          <button type="submit" className="ml-2 text-[var(--primary)] hover:text-[var(--primary)]">
            <IconButtonSearch />
          </button>
          <button
            type="button"
            className="ml-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            onClick={handleSearchToggle}
          >
            <IconButtonClose />
          </button>
        </form>
      )}
    </div>
  );
}
