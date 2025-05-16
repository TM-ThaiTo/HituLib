'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { MenuNavigations } from '@/types/protal';

const navItemStyles = cn(
  'relative flex items-center text-sm font-bold uppercase text-foreground',
  'transition-colors duration-300 ease-out hover:text-blue-600',
  "after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:h-[2px] after:w-full",
  'after:scale-x-0 after:origin-left after:bg-blue-600 after:transition-transform after:duration-300',
  'hover:after:scale-x-100 focus:outline-none',
);

export default function Navbar({ data }: { data: MenuNavigations }) {
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <div className="hidden items-center space-x-6 md:flex">
        {data
          .filter((item: any) => item.parentId === 0)
          .sort((a: any, b: any) => a.sapXep - b.sapXep)
          .slice(0, 6) // Limit to 6 items and remove productions
          .map((item: any, index: any) =>
            item?.children === null || item.children.length === 0 ? (
              <Link
                key={index}
                href={item.duongDan ?? '#'}
                className={navItemStyles}
                target={item.duongDan?.startsWith('http') ? '_blank' : undefined}
                rel={item.duongDan?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.tieuDe}
              </Link>
            ) : (
              <NavigationMenu key={index} className="relative">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navItemStyles}>
                      <span className="inline-flex items-center gap-1">{item.tieuDe}</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[230px] rounded-none shadow-lg">
                      <div className="flex flex-col">
                        {item.children
                          .sort((a: any, b: any) => a.sapXep - b.sapXep)
                          .map((child: any, idx: any) => (
                            <Link
                              key={idx}
                              href={child.duongDan ?? '#'}
                              className="block px-2.5 py-3.5 text-sm font-bold text-gray-700 hover:bg-blue-50"
                              target={child.duongDan?.startsWith('http') ? '_blank' : undefined}
                              rel={
                                child.duongDan?.startsWith('http')
                                  ? 'noopener noreferrer'
                                  : undefined
                              }
                            >
                              {child.tieuDe}
                            </Link>
                          ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ),
          )}
      </div>
    </nav>
  );
}
