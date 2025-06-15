'use client';

import React from 'react';
import CustomLink from '@/hooks/next-link';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { DataBreadcrumb } from '@/constants/breadcrumb';

type BreadcrumbProps = {
  customTitle?: string;
};

// Danh sách mã ngôn ngữ hỗ trợ
const supportedLocales = ['vi', 'en'];

export function BreadcrumbWithCustomSeparator({ customTitle }: BreadcrumbProps) {
  const pathname = usePathname();
  let segments = pathname.split('/').filter(Boolean);

  // Nếu segment đầu tiên là mã ngôn ngữ, thì loại bỏ nó
  if (segments.length && supportedLocales.includes(segments[0])) {
    segments = segments.slice(1);
  }

  const breadcrumbs = segments.map((_, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const item = DataBreadcrumb.find((item) => item.path === href);

    return {
      href,
      tieuDe: item?.title || segments[index],
    };
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <CustomLink href="/">Trang chủ</CustomLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {breadcrumbs.map((item, index) => (
          <React.Fragment key={item.href}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === breadcrumbs.length - 1 ? (
                <BreadcrumbPage className="text-primary max-w-[200px] truncate overflow-hidden font-semibold whitespace-nowrap sm:max-w-[300px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px]">
                  {customTitle || item.tieuDe}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <CustomLink
                    href={item.href}
                    className="inline-block max-w-[150px] truncate overflow-hidden align-middle whitespace-nowrap sm:max-w-[200px] md:max-w-[300px]"
                  >
                    {item.tieuDe}
                  </CustomLink>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
