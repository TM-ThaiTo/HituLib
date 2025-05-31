'use client';

import CustomLink from '@/hooks/next-link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MenuNavigationsType, MenuNavigationType } from '@/types/portal';
import IconAction from '@/components/layouts/header/icon-action';
import MenuBarMobile from './components/menu-bar-mobile';

const navItemStyles = cn(
  'relative flex items-center text-sm font-bold uppercase text-foreground',
  'transition-colors duration-300 ease-out hover:text-blue-600',
  "after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:h-[2px] after:w-full",
  'after:scale-x-0 after:origin-left after:bg-blue-600 after:transition-transform after:duration-300',
  'hover:after:scale-x-100 focus:outline-none',
);

// Helper for rendering a single menu link
function MenuLink({ item, className = '' }: { item: MenuNavigationType; className?: string }) {
  return (
    <CustomLink
      key={item.id}
      href={item.duongDan ?? '#'}
      className={className}
      target={item.moCuaSoMoi ? '_blank' : undefined}
      rel={item.moCuaSoMoi ? 'noopener noreferrer' : undefined}
    >
      {item.tieuDe}
    </CustomLink>
  );
}

// Helper for rendering children links
function MenuChildren({ children }: { children: MenuNavigationType[] }) {
  return (
    <div className="flex flex-col">
      {children
        .sort((a, b) => a.sapXep - b.sapXep)
        .map((child) => (
          <MenuLink
            key={child.id}
            item={child}
            className="block rounded px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
          />
        ))}
    </div>
  );
}

export default function Navbar({ data }: { data: MenuNavigationsType }) {
  const topLevelMenus = data
    .filter((item) => item.parentId === 0)
    .sort((a, b) => a.sapXep - b.sapXep);

  const MAX_VISIBLE = 6;

  const visibleMenus =
    topLevelMenus.length <= MAX_VISIBLE ? topLevelMenus : topLevelMenus.slice(0, MAX_VISIBLE - 1);

  const extraMenus =
    topLevelMenus.length <= MAX_VISIBLE ? [] : topLevelMenus.slice(MAX_VISIBLE - 1);

  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <div className="hidden items-center space-x-6 md:flex">
        {visibleMenus.map((item) =>
          !item.children || item.children.length === 0 ? (
            <MenuLink key={item.id} item={item} className={navItemStyles} />
          ) : (
            <NavigationMenu key={item.id} className="relative">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navItemStyles}>
                    {item.tieuDe}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50 min-w-[230px] rounded-md bg-white p-2 shadow-lg">
                    <MenuChildren children={item.children} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ),
        )}

        {/* "Xem thêm" for extra menus */}
        {extraMenus.length > 0 && (
          <NavigationMenu className="relative">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemStyles}>Xem thêm</NavigationMenuTrigger>
                <NavigationMenuContent className="z-50 min-w-[300px] rounded-md bg-white p-2 shadow-lg">
                  <Accordion type="multiple" className="w-full space-y-1">
                    {extraMenus.map((item) => {
                      const hasChildren = item.children && item.children.length > 0;
                      return (
                        <AccordionItem
                          key={item.id}
                          value={`item-${item.id}`}
                          className="overflow-hidden rounded-md border border-gray-200 bg-white"
                        >
                          {hasChildren ? (
                            <AccordionTrigger className="cursor-pointer px-4 py-3 text-left text-sm font-semibold text-black uppercase transition-colors hover:bg-gray-100 focus:outline-none">
                              {item.tieuDe}
                            </AccordionTrigger>
                          ) : (
                            <MenuLink
                              item={item}
                              className="block rounded px-4 py-3 text-sm font-semibold text-black uppercase transition-colors hover:bg-gray-50 hover:text-blue-600"
                            />
                          )}
                          {hasChildren && (
                            <AccordionContent>
                              <MenuChildren children={item.children} />
                            </AccordionContent>
                          )}
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
        <IconAction />
      </div>
      {/* Mobile menu */}
      <MenuBarMobile data={data} />
    </nav>
  );
}
