import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from './ui/button';

export default function LanguageSwitcher() {
  const locale = useLocale();

  return (
    <div className="flex gap-2">
      <Link href="/" locale="vi">
        <Button variant={locale === 'vi' ? 'default' : 'outline'}>Tiếng Việt</Button>
      </Link>
      <Link href="/" locale="en">
        <Button variant={locale === 'en' ? 'default' : 'outline'}>English</Button>
      </Link>
    </div>
  );
}
