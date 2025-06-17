'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return;

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;

    const segments = pathname.split('/').filter(Boolean);
    const isLocaleInPath = ['vi', 'en'].includes(segments[0]);
    const newSegments = isLocaleInPath ? segments.slice(1) : segments;

    const newPath = `/${newLocale}/${newSegments.join('/')}`;

    window.location.href = newPath;
  };

  const currentLang = languages.find((l) => l.code === locale);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 cursor-pointer rounded-full p-0 text-xl"
          aria-label="Chuyển ngôn ngữ"
        >
          <span className="text-xl">{currentLang?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onSelect={() => switchLanguage(lang.code)}
            className="flex items-center gap-2"
          >
            <span className="text-xl">{lang.flag}</span>
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
