// import { getFooter } from '@/api/portal/api-footer';
// import './footer.css';
// export default async function MainFooter() {
//   const data = await getFooter();

//   if (!data)
//     return (
//       <footer className="bg-white px-4 py-6 shadow-inner">
//         <span className="text-red-500">Lỗi lấy footer</span>
//       </footer>
//     );

//   return (
//     <footer className="bg-white px-4 py-6 shadow-inner">
//       <div className="container mx-auto" dangerouslySetInnerHTML={{ __html: data.noiDung }} />
//     </footer>
//   );
// }

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function MainFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Thông tin thư viện */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-[var(--foreground)]">Thư viện Cds</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Thư viện Đại học Cds cung cấp nguồn tài nguyên học thuật phong phú và không gian học
              tập hiện đại cho sinh viên, giảng viên và nhà nghiên cứu.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="transition-colors hover:text-[var(--primary)]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="transition-colors hover:text-[var(--primary)]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="transition-colors hover:text-[var(--primary)]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="transition-colors hover:text-[var(--primary)]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-[var(--foreground)]">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/opac" className="hover:text-[var(--primary)]">
                  Tra cứu tài liệu (OPAC)
                </Link>
              </li>
              <li>
                <Link href="/account/research" className="hover:text-[var(--primary)]">
                  Nghiên cứu khoa học
                </Link>
              </li>
              <li>
                <Link href="/purchase" className="hover:text-[var(--primary)]">
                  Đề xuất mua tài liệu
                </Link>
              </li>
              <li>
                <Link href="/opac/courses" className="hover:text-[var(--primary)]">
                  Quản lý khóa học
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-[var(--primary)]">
                  Tài khoản
                </Link>
              </li>
            </ul>
          </div>

          {/* Dịch vụ */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-[var(--foreground)]">Dịch vụ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Mượn trả tài liệu
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Đặt chỗ học tập
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Truy cập cơ sở dữ liệu
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Hỗ trợ nghiên cứu
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Đào tạo người dùng
                </Link>
              </li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-[var(--foreground)]">Liên hệ</h3>
            <address className="space-y-1 text-sm leading-relaxed not-italic">
              <p>Thư viện Đại học Cds</p>
              <p>Số 1 Đường XYZ</p>
              <p>TP. Hồ Chí Minh, Việt Nam</p>
              <p className="mt-2">Điện thoại: (123) 456-789</p>
              <p>
                Email:{' '}
                <a href="mailto:library@hoangkhanhcds.com" className="hover:text-[var(--primary)]">
                  library@hoangkhanhcds.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Footer bottom line */}
        <div className="mt-10 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} Thư viện Đại học Cds. Tất cả các quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}
