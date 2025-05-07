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
import { MenuNavigation } from '@/types/header';

const navItemStyles = cn(
  'relative flex items-center text-sm font-bold uppercase text-foreground',
  'transition-colors duration-300 ease-out hover:text-blue-600',
  "after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:h-[2px] after:w-full",
  'after:scale-x-0 after:origin-left after:bg-blue-600 after:transition-transform after:duration-300',
  'hover:after:scale-x-100 focus:outline-none',
);

interface ActionItem {
  label: string;
  type: number;
  href?: string;
  child?: { label: string; href: string }[];
}

export default function Navbar({
  data
}: {
  data: MenuNavigation
}) {
  const actions: ActionItem[] = [
    { label: 'trang chủ', type: 1, href: '/' },
    {
      label: 'giới thiệu',
      type: 2,
      child: [
        { label: 'Giới thiệu chung', href: '#' },
        { label: 'Quy trình làm việc', href: '#' },
        { label: 'Thông báo', href: '#' },
        { label: 'Thư cảm ơn', href: '#' },
        { label: 'Tin tức sự kiện', href: '#' },
        { label: 'Hình ảnh hoạt động', href: '#' },
        { label: 'Văn bản pháp quy thư viện', href: '#' },
      ],
    },
    { label: 'hướng dẫn', type: 1, href: '#' },
    {
      label: 'dich vụ',
      type: 2,
      child: [
        { label: 'Đọc mượn giáo trình, tài liệu', href: '#' },
        { label: 'Phát hành giáo trình, tài liệu nội bộ', href: '#' },
        { label: 'Cung cấp không gian và tiện ích học tập', href: '#' },
        { label: 'Mượn tài liệu thư viện', href: '#' },
        { label: 'Tư vấn và hướng dẫn tìm tín chỉ theo yêu cầu', href: '#' },
      ],
    },
    {
      label: 'sản phẩm',
      type: 2,
      child: [
        { label: 'Danh mục sách mới', href: '#' },
        { label: 'Giới thiệu sách hay', href: '#' },
      ],
    },
    {
      label: 'tài nguyên',
      type: 2,
      child: [
        { label: 'Tài liệu giấy', href: '#' },
        { label: 'Tài liệu số', href: '#' },
        { label: 'Tài liệu nội bộ', href: '#' },
        { label: 'Cơ sở dữ liệu', href: '#' },
      ],
    },
  ];
  console.log('data', data);
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <div className="hidden items-center space-x-6 md:flex">
        {actions.map((action, index) =>
          action.type === 1 ? (
            <Link key={index} href={action.href!} className={navItemStyles}>
              {action.label}
            </Link>
          ) : (
            <NavigationMenu key={index} className="relative">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navItemStyles}>
                    <span className="inline-flex items-center gap-1">{action.label}</span>
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="min-w-[230px] rounded-none shadow-lg">
                    <div className="flex flex-col">
                      {action.child?.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block px-2.5 py-4 text-sm font-bold text-gray-700 hover:bg-blue-50"
                        >
                          {item.label}
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
// 'use client';

// import Link from 'next/link';
// import { cn } from '@/lib/utils';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from '@/components/ui/navigation-menu';

// const navItemStyles = cn(
//   'relative flex items-center text-sm font-bold uppercase text-foreground',
//   'transition-colors duration-300 ease-out hover:text-blue-600',
//   "after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:h-[2px] after:w-full",
//   'after:scale-x-0 after:origin-left after:bg-blue-600 after:transition-transform after:duration-300',
//   'hover:after:scale-x-100 focus:outline-none',
// );

// interface ActionItem {
//   label: string;
//   type: number;
//   href?: string;
//   child?: { label: string; href: string }[];
// }

// interface NavItem {
//   id: number;
//   tieuDe: string;
//   duongDan: string;
//   icon: string;
//   parentId: number;
//   sapXep: number;
//   moCuaSoMoi: boolean;
//   children: {
//     id: number;
//     tieuDe: string;
//     duongDan: string;
//     icon: string;
//     parentId: number;
//     sapXep: number;
//     moCuaSoMoi: boolean;
//   }[];
// }

// export default function Navbar({ data }: { data: NavItem[] }) {
//   // Transform data into ActionItem format
//   const actions: ActionItem[] = data
//     .filter((item) => item.parentId === 0) // Only top-level items
//     .sort((a, b) => a.sapXep - b.sapXep) // Sort by sapXep
//     .map((item) => ({
//       label: item.tieuDe,
//       type: item.children.length > 0 ? 2 : 1, // Type 2 for items with children, 1 for links
//       href: item.children.length === 0 ? item.duongDan : undefined,
//       child: item.children.length > 0 ?
//         item.children
//           .sort((a, b) => a.sapXep - b.sapXep) // Sort children by sapXep
//           .map((child) => ({
//             label: child.tieuDe,
//             href: child.duongDan,
//           })) : undefined,
//     }));

//   return (
//     <nav className="flex items-center justify-between px-4 py-2">
//       <div className="hidden items-center space-x-6 md:flex">
//         {actions.map((action, index) =>
//           action.type === 1 ? (
//             <Link
//               key={index}
//               href={action.href!}
//               className={navItemStyles}
//               target={action.href?.startsWith('http') ? '_blank' : undefined}
//               rel={action.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
//             >
//               {action.label}
//             </Link>
//           ) : (
//             <NavigationMenu key={index} className="relative">
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger className={navItemStyles}>
//                     <span className="inline-flex items-center gap-1">{action.label}</span>
//                   </NavigationMenuTrigger>
//                   <NavigationMenuContent className="min-w-[230px] rounded-none shadow-lg">
//                     <div className="flex flex-col">
//                       {action.child?.map((item, idx) => (
//                         <Link
//                           key={idx}
//                           href={item.href}
//                           className="block px-2.5 py-4 text-sm font-bold text-gray-700 hover:bg-blue-50"
//                           target={item.href.startsWith('http') ? '_blank' : undefined}
//                           rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                     </div>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>
//           )
//         )}
//       </div>
//     </nav>
//   );
// }