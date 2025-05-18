type DataBreadcrumbType = {
  duongDan: string;
  tieuDe: string;
}[];

export const DataBreadcrumb: DataBreadcrumbType = [
  // Trang chủ
  {
    duongDan: '/',
    tieuDe: 'Trang chủ',
  },

  // Giới thiệu thư viện
  {
    duongDan: '/gioi-thieu-thu-vien',
    tieuDe: 'Giới thiệu Thư viện',
  },
  {
    duongDan: '/gioi-thieu-thu-vien/gioi-thieu-chung',
    tieuDe: 'Giới thiệu chung',
  },
  {
    duongDan: '/gioi-thieu-thu-vien/so-do-to-chuc-hoat-dong',
    tieuDe: 'Sơ đồ tổ chức hoạt động',
  },
  {
    duongDan: '/gioi-thieu-thu-vien/noi-quy-thu-vien',
    tieuDe: 'Nội quy thư viện',
  },
  {
    duongDan: '/gioi-thieu-thu-vien/quy-dinh-su-dung-thu-vien',
    tieuDe: 'Quy định sử dụng thư viện',
  },
  {
    duongDan: '/gioi-thieu-thu-vien/lich-lam-viec-cua-thu-vien',
    tieuDe: 'Lịch làm việc của thư viện',
  },

  // Category
  {
    duongDan: '/category',
    tieuDe: 'Phân loại',
  },
  {
    duongDan: '/category/tin-tuc',
    tieuDe: 'Tin tức',
  },
  {
    duongDan: '/category/thong-bao',
    tieuDe: 'Thông báo',
  },


  // Service (dịch vụ)
  {
    duongDan: '/service',
    tieuDe: 'Dịch vụ',
  },
  {
    duongDan: '/service/detail-service',
    tieuDe: 'Chi tiết dịch vụ',
  }
];
