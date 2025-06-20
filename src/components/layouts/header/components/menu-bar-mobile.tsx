import { useEffect, useState } from 'react';

import Link from 'next/link';

import { MenuNavigationsType, MenuNavigationType } from '@/types/portal';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import IconAction from '@/components/layouts/header/icon-action';
import OptimizedImage from '@/lib/image';

export default function MenuBarMobile({ data }: { data: MenuNavigationsType }) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const topLevelMenus = data
    .filter((item) => item.parentId === 0)
    .sort((a, b) => a.sapXep - b.sapXep);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSheetOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="mt-9 w-full">
            <div className="mt-4 px-4">
              <Link
                href="/"
                className="mb-6 flex items-center justify-start"
                onClick={() => setIsSheetOpen(false)}
              >
                <OptimizedImage
                  src="/logo-lib-hitu.png"
                  alt="HITU LIB"
                  width={341}
                  height={70}
                  className="h-[65px] w-auto object-contain"
                />
              </Link>

              <Accordion type="multiple" className="w-full space-y-1">
                {topLevelMenus.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;

                  return (
                    <AccordionItem
                      key={item.id}
                      value={`item-${item.id}`}
                      className="overflow-hidden rounded-md border border-gray-200"
                    >
                      {hasChildren ? (
                        <AccordionTrigger className="cursor-pointer bg-white px-4 py-3 text-left text-sm font-semibold text-black uppercase transition-colors hover:bg-gray-100">
                          {item.tieuDe}
                        </AccordionTrigger>
                      ) : (
                        <SheetClose asChild>
                          <Link
                            href={item.duongDan ?? '#'}
                            className="block bg-white px-4 py-3 text-sm font-semibold text-black uppercase transition-colors hover:bg-gray-50 hover:text-blue-600"
                            target={item.moCuaSoMoi ? '_blank' : undefined}
                            rel={item.moCuaSoMoi ? 'noopener noreferrer' : undefined}
                          >
                            {item.tieuDe}
                          </Link>
                        </SheetClose>
                      )}

                      {hasChildren && (
                        <AccordionContent className="border-b-1 bg-gray-50">
                          <div className="space-y-0">
                            {item.children &&
                              item?.children
                                .sort((a: any, b: any) => a.sapXep - b.sapXep)
                                .map((child: MenuNavigationType) => (
                                  <SheetClose asChild key={child.id}>
                                    <Link
                                      href={child.duongDan ?? '#'}
                                      className="block px-6 py-2 text-sm font-medium text-gray-700 uppercase transition-colors hover:bg-gray-100 hover:text-blue-600"
                                      target={child.moCuaSoMoi ? '_blank' : undefined}
                                      rel={child.moCuaSoMoi ? 'noopener noreferrer' : undefined}
                                    >
                                      {child.tieuDe}
                                    </Link>
                                  </SheetClose>
                                ))}
                          </div>
                        </AccordionContent>
                      )}
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>

            <div className="m-6 flex w-full justify-center">
              <IconAction />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
