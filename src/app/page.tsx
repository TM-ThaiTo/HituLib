import Banner from '@/components/layouts/home/banner';
import { BannersType } from '@/types/banner';

const banners: BannersType = [
  { id: 4, tieuDe: 'Image 1', lienKet: '#', duongDan: '/banner/giai-phong-mien-nam-2025.png' },
  { id: 1, tieuDe: 'Image 1', lienKet: '#', duongDan: '/banner/banner-tuyen-sinh-2025.jpg' },
  { id: 2, tieuDe: 'Image 1', lienKet: '#', duongDan: '/banner/cuoc-thi-khoe-goc-hoc.png' },
  { id: 3, tieuDe: 'Image 1', lienKet: '#', duongDan: '/banner/DiemRenLuyenWebsite.jpg' },
  { id: 5, tieuDe: 'Image 1', lienKet: '#', duongDan: '/banner/img_main_website-1.jpg' },
  { id: 6, tieuDe: 'Image 1', lienKet: '#', duongDan: '/banner/NgayMoiTruong2024-1.jpg' },
  { id: 7, tieuDe: 'Image 1', lienKet: '#', duongDan: '/banner/nha-gio-viet-nam-2024.jpg' },
  { id: 8, tieuDe: 'Image 1', lienKet: '#', duongDan: '/banner/plvn-2024-update.jpg' },
  {
    id: 9,
    tieuDe: 'Image 1',
    lienKet: '#',
    duongDan: '/banner/tu-sach-tong-bi-thu-nguyen-phu-trong.jpg',
  },
  { id: 10, tieuDe: 'Image 1', lienKet: '#', duongDan: '/banner/van-hoa-doc-2025.png' },
];

export default async function Home() {
  return (
    <div className="container mx-auto">
      <Banner banners={banners} />
    </div>
  );
}
