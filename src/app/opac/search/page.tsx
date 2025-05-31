// app/search/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';

export default function OpacSearchPage() {
  const searchParams = useSearchParams();
  const p = searchParams.get('p') || '';
  const field = searchParams.get('field') || '';

  return (
    <div className="max-w-screen-container sm:px-6 lg:px-8">
      <p>Query: {p}</p>
      <p>Field: {field}</p>
    </div>
  );
}
