'use client';
import { useRouter } from '@/hooks/use-router';
import { useEffect } from 'react';

export default function LayoutsNews() {
  const router = useRouter();

  useEffect(() => {
    router.push('/category/tin-tuc');
  }, [router]);

  return null;
}
