import { BannersType, BooksType, NewEventsType } from '@/types/portal';

const newEvents: NewEventsType = [
  {
    id: 123,
    tieuDe: 'Chuyên trang thông tin Chiến dịch Điện Biên Phủ',
    mota: 'Chuyên trang thông tin Chiến dịch Điện Biên Phủ',
    anhDaiDien: '/news/tu-lieu-dien-bien-phu-300x238.jpg',
    ngayTao: '2025-03-01T00:00:00',
    loaiId: 1,
  },
  {
    id: 122,
    tieuDe: 'Bài tham dự cuộc chia sẻ góc học tập 2025',
    mota: 'Bài tham dự cuộc chia sẻ góc học tập 2025',
    anhDaiDien: '/news/DoNguyenPhuongThao-300x170.jpg',
    ngayTao: '2025-03-01T00:00:00',
    loaiId: 2,
  },
  {
    id: 121,
    tieuDe: 'Thông báo nghỉ lễ ngày Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2025',
    mota: 'Thông báo nghỉ lễ ngày Chiến thắng 30/4 và ngày Quốc tế lao động 01/5 năm 2025',
    anhDaiDien: '/news/thong-bao-300x168.png',
    ngayTao: '2025-03-01T00:00:00',
    loaiId: 3,
  },
  {
    id: 120,
    tieuDe: 'Đại tướng Võ Nguyên Giáp – chân dung một huyền thoại qua những trang sách',
    mota: 'Đại tướng Võ Nguyên Giáp – chân dung một huyền thoại qua những trang sách',
    anhDaiDien: '/news/dai-tuong-vo-nguyen-giap-300x210.jpg',
    ngayTao: '2025-03-01T00:00:00',
    loaiId: 4,
  },
  {
    id: 119,
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

const books: BooksType = [
  {
    id: 1,
    tieuDe: 'Giáo trình vẽ kỹ thuật 1',
    anhDaiDien: '/books/giao-trinh-ve-ky-thuat-1-2024.png',
  },
  {
    id: 2,
    tieuDe: ' Giáo trình công nghệ chế biến rau, củ, quả và ngũ cốc',
    anhDaiDien: '/books/gt-giao-cncb-rau-cu-qua-2023-1.jpg',
  },
  {
    id: 3,
    tieuDe: ' Giáo trình thiết kế rập công nghiệp',
    anhDaiDien: '/books/gt-thiet-ke-rap-cong-nghiep-20241-1.jpg',
  },
  { id: 4, tieuDe: ' Giáo trình toán ứng dụng C', anhDaiDien: '/books/toan-ung-dung-c-2024.jpg' },
  {
    id: 5,
    tieuDe: ' Giáo trình Nghệ thuật lãnh đạo',
    anhDaiDien: '/books/giao-trinh-nghe-thuat-lanh-dao-2023.jpg',
  },
  {
    id: 6,
    tieuDe: ' Giáo trình quản trị bán hàng',
    anhDaiDien: '/books/gt-quan-tri-ban-hang-vu-nhat-tan-2023.png',
  },
  {
    id: 7,
    tieuDe: ' Giáo trình kỹ thuật lập trình',
    anhDaiDien: '/books/giao-trinh-ve-ky-thuat-1-2024.png',
  },
  {
    id: 8,
    tieuDe: ' English for Mechanical Engineering',
    anhDaiDien: '/books/english-for-mechanical-engineering-2022.png',
  },
];

export { newEvents, banners, books };
