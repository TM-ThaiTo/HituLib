'use client';

import { useEffect, Fragment } from 'react';
import CustomLink from '@/hooks/next-link';
import { usePathname, useRouter } from '@/i18n/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { DataBreadcrumb } from '@/constants/breadcrumb';
import routes from '@/constants/routes';
import { useTranslations } from 'next-intl';
import Icons from './icons';

type BreadcrumbProps = {
  customTitle?: string;
};

// Danh sách mã ngôn ngữ hỗ trợ
const supportedLocales = ['vi', 'en'];

// Hàm format slug thành title
const formatSlugTitle = (slug: string): string => {
  return slug
    .replace(/-/g, ' ')
    .replace(/\.html$/, '')
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

export function BreadcrumbWithCustomSeparator({ customTitle }: BreadcrumbProps) {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();
  let segments = pathname.split('/').filter(Boolean);

  // Nếu segment đầu tiên là mã ngôn ngữ, thì loại bỏ nó
  if (segments.length && supportedLocales.includes(segments[0])) {
    segments = segments.slice(1);
  }

  // Chuyển hướng từ /news về /category/tin-tuc
  useEffect(() => {
    if (segments[0] === 'news' && segments.length === 1) {
      router.replace('/category/tin-tuc');
    }
  }, [segments, router]);

  const breadcrumbs: { href: string; tieuDe: string }[] = [];

  // Nếu là đường dẫn tin tức
  if (segments[0] === 'news') {
    // Breadcrumb "Tin tức"
    breadcrumbs.push({
      href: routes.chuyenMuc.tinTuc.path,
      tieuDe: t(routes.chuyenMuc.tinTuc.translationKey),
    });

    // Nếu có thêm slug sau "/news"
    if (segments.length > 1) {
      const slug = segments[segments.length - 1];
      breadcrumbs.push({
        href: `${routes.tintuc.goc.path}/${slug}`,
        tieuDe: customTitle || t('breadcrumb.format_slug', { slug: formatSlugTitle(slug) }),
      });
    }
  } else {
    // Các route khác, sử dụng DataBreadcrumb
    segments.forEach((_, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      const matched = DataBreadcrumb.find((r) => r.path === href);

      breadcrumbs.push({
        href,
        tieuDe: matched ? t(matched.translationKey) : segments[index],
      });
    });
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <CustomLink href="/" className='flex'>
              <Icons.home className='h-5 w-5 mr-1' />
              {t('breadcrumb.home')}
            </CustomLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {breadcrumbs.map((item, index) => (
          <Fragment key={item.href}>
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
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
