import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';

export default function LayoutSearchPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbWithCustomSeparator />
      {children}
    </>
  );
}
