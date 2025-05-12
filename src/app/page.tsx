import Banner from '@/components/layouts/home/banner';
import NewsEventsLayout from '@/components/layouts/home/news-events';
import { BannersType, NewEventsType } from '@/types/protal';

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

const newEvents: NewEventsType = [
  {
    id: 1,
    tieuDe: 'Chuyên trang thông tin Chiến dịch Điện Biên Phủ',
    mota: 'Chuyên trang thông tin Chiến dịch Điện Biên Phủ',
    anhDaiDien: '/news/tu-lieu-dien-bien-phu-300x238.jpg',
    ngayTao: '2025-03-01T00:00:00',
    loaiId: 1,
  },
  {
    id: 2,
    tieuDe: 'Bài tham dự cuộc chia sẻ góc học tập 2025',
    mota: 'Bài tham dự cuộc chia sẻ góc học tập 2025',
    anhDaiDien: '/news/DoNguyenPhuongThao-300x170.jpg',
    ngayTao: '2025-03-01T00:00:00',
    loaiId: 2,
  },
  {
    id: 3,
    tieuDe: 'Thông báo nghỉ lễ ngày Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2025',
    mota: 'Thông báo nghỉ lễ ngày Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2025',
    anhDaiDien: '/news/thong-bao-300x168.png',
    ngayTao: '2025-03-01T00:00:00',
    loaiId: 3,
  },
  {
    id: 4,
    tieuDe: 'Đại tướng Võ Nguyên Giáp – chân dung một huyền thoại qua những trang sách',
    mota: 'Đại tướng Võ Nguyên Giáp – chân dung một huyền thoại qua những trang sách',
    anhDaiDien: '/news/dai-tuong-vo-nguyen-giap-300x210.jpg',
    ngayTao: '2025-03-01T00:00:00',
    loaiId: 4,
  },
  {
    id: 5,
    tieuDe: 'Sách Người Bạn Tốt Của Chúng Ta',
    mota: 'Sách Người Bạn Tốt Của Chúng Ta',
    anhDaiDien: '/news/van-hoa-doc-2025-300x128.png',
    ngayTao: '2025-03-01T00:00:00',
    loaiId: 5,
  },
  {
    id: 6,
    tieuDe: 'Thông báo cuộc thi “Chia sẻ góc học tập” – Khoe góc học, rinh quà hot!',
    mota: 'Thông báo cuộc thi “Chia sẻ góc học tập” – Khoe góc học, rinh quà hot!',
    anhDaiDien: '/news/cuoc-thi-khoe-goc-hoc-300x128.png',
    ngayTao: '2025-03-01T00:00:00',
    loaiId: 6,
  },
];

export default async function Home() {
  return (
    <div className="container mx-auto">
      <Banner banners={banners} />
      <NewsEventsLayout newEvents={newEvents} />
    </div>
  );
}
