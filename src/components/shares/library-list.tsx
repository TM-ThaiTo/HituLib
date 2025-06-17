import CustomLink from '@/hooks/next-link';
import OptimizedImage from '@/lib/image';
import React from 'react';

const items = [
  {
    title: 'Tra cứu tài liệu',
    description: 'Tìm kiếm và truy cập tài liệu dễ dàng.',
    anhDaiDien: '/guides/banner-tra-cuu-opac.png',
    duongDan: '#',
  },
  {
    title: 'Dịch vụ phát hành tài liệu',
    description: 'Xuất bản và phát hành tài liệu mới.',
    anhDaiDien: '/guides/banner-book-hitu.png',
    duongDan: '#',
  },
  {
    title: 'Thư viện liên kết',
    description: 'Kết nối với các thư viện khác.',
    anhDaiDien: '/guides/thu-vien-lien-ket.png',
    duongDan: '#',
  },
  {
    title: 'Cộng tác viên thư viện',
    description: 'Tuyển dụng tình nguyện viên.',
    anhDaiDien: '/guides/cong-tac-vien-thu-vien-2024.png',
    duongDan: '#',
  },
  {
    title: 'Khảo sát bạn đọc',
    description: 'Khảo sát ý kiến bạn đọc.',
    anhDaiDien: '/guides/banner-khao-sat-ban-doc.png',
    duongDan: '#',
  },
];

export default function LibraryList() {
  return (
    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-1">
      {items.map((item, index) => (
        <div key={index} className="mb-3">
          <CustomLink href={item.duongDan}>
            <OptimizedImage
              width={500}
              height={300}
              src={item.anhDaiDien}
              alt={item.title}
              className="rounded-lg object-contain"
            />
          </CustomLink>
        </div>
      ))}
    </div>
  );
}
