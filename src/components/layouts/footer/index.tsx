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


import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function MainFooter() {
  return (
    <footer className="bg-gray-100 border-t text-gray-700">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Thông tin thư viện */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Thư viện Cds</h3>
            <p className="text-sm leading-relaxed mb-4">
              Thư viện Đại học Cds cung cấp nguồn tài nguyên học thuật phong phú và không gian học tập hiện đại
              cho sinh viên, giảng viên và nhà nghiên cứu.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/opac" className="hover:text-blue-600">Tra cứu tài liệu (OPAC)</Link></li>
              <li><Link href="/account/research" className="hover:text-blue-600">Nghiên cứu khoa học</Link></li>
              <li><Link href="/purchase" className="hover:text-blue-600">Đề xuất mua tài liệu</Link></li>
              <li><Link href="/opac/courses" className="hover:text-blue-600">Quản lý khóa học</Link></li>
              <li><Link href="/account" className="hover:text-blue-600">Tài khoản</Link></li>
            </ul>
          </div>

          {/* Dịch vụ */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Dịch vụ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-600">Mượn trả tài liệu</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Đặt chỗ học tập</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Truy cập cơ sở dữ liệu</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Hỗ trợ nghiên cứu</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Đào tạo người dùng</Link></li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Liên hệ</h3>
            <address className="text-sm leading-relaxed not-italic space-y-1">
              <p>Thư viện Đại học Cds</p>
              <p>Số 1 Đường XYZ</p>
              <p>TP. Hồ Chí Minh, Việt Nam</p>
              <p className="mt-2">Điện thoại: (123) 456-789</p>
              <p>Email: <a href="mailto:library@hoangkhanhcds.com" className="hover:text-blue-600">library@hoangkhanhcds.com</a></p>
            </address>
          </div>
        </div>

        {/* Footer bottom line */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Thư viện Đại học Cds. Tất cả các quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}
