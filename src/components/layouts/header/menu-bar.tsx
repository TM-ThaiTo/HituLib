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
import IconAction from '@/components/layouts/header/icon-action';
import MenuBarMobile from './components/menu-bar-mobile';

const navItemStyles = cn(
  'relative flex items-center text-sm font-bold uppercase text-foreground',
  'transition-colors duration-300 ease-out hover:text-blue-600',
  "after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:h-[2px] after:w-full",
  'after:scale-x-0 after:origin-left after:bg-blue-600 after:transition-transform after:duration-300',
  'hover:after:scale-x-100 focus:outline-none',
);

export default function Navbar({ data }: { data: MenuNavigations }) {
  const topLevelMenus = data
    .filter((item) => item.parentId === 0)
    .sort((a, b) => a.sapXep - b.sapXep);

  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <div className="hidden items-center space-x-6 md:flex">
        {topLevelMenus.map((item) =>
          !item.children || item.children.length === 0 ? (
            <Link
              key={item.id}
              href={item.duongDan ?? '#'}
              className={navItemStyles}
              target={item.moCuaSoMoi ? '_blank' : undefined}
              rel={item.moCuaSoMoi ? 'noopener noreferrer' : undefined}
            >
              {item.tieuDe}
            </Link>
          ) : (
            <NavigationMenu key={item.id} className="relative">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navItemStyles}>
                    {item.tieuDe}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50 min-w-[230px] rounded-none bg-white shadow-lg">
                    <div className="flex flex-col">
                      {item.children
                        .sort((a, b) => a.sapXep - b.sapXep)
                        .map((child) => (
                          <Link
                            key={child.id}
                            href={child.duongDan ?? '#'}
                            className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50"
                            target={child.moCuaSoMoi ? '_blank' : undefined}
                            rel={child.moCuaSoMoi ? 'noopener noreferrer' : undefined}
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
        <IconAction />
      </div>
      <MenuBarMobile data={data} />
    </nav>
  );
}
