import ImagePublic from '@/constants/image';
import { BreadcrumbWithCustomSeparator } from '@/components/shares/bread-crumb';
import ItemCategory from '@/components/shares/item-category';

const data = [
  {
    id: 119,
    tieuDe: 'Thư cảm ơn Thầy Vũ Nhật Tân đã tặng tài liệu cho thư viện',
    mota: 'Thư cảm ơn Thầy Vũ Nhật Tân đã tặng tài liệu cho thư viện',
    anhDaiDien: ImagePublic.thuCamOn,
    ngayTao: '2025-03-01T00:00:00',
    loaiId: 5,
  },
];

export default function HuongDanPage() {
  return (
    <>
      <BreadcrumbWithCustomSeparator />

      <div className="grid grid-cols-1 gap-4">
        {data.map((item, index) => (
          <div key={index}>
            <ItemCategory
              tieuDe={item.tieuDe}
              id={item.id}
              anhDaiDien={item.anhDaiDien}
              moTa={item.mota}
            />
          </div>
        ))}
      </div>
    </>
  );
}
