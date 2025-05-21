// constants/routes.ts

const routes = {
  trangChu: '/',

  // Giới thiệu thư viện
  gioiThieuThuVien: {
    goc: '/gioi-thieu-thu-vien',
    gioiThieuChung: '/gioi-thieu-thu-vien/gioi-thieu-chung',
    hinhAnhHoatDong: '/gioi-thieu-thu-vien/hinh-anh-hoat-dong',
    lichLamViec: '/gioi-thieu-thu-vien/lich-lam-viec-cua-thu-vien',
    noiQuy: '/gioi-thieu-thu-vien/noi-quy-thu-vien',
    quyDinhSuDung: '/gioi-thieu-thu-vien/quy-dinh-su-dung-thu-vien',
    quyTrinhLamViec: '/gioi-thieu-thu-vien/quy-trinh-lam-viec',
    soDoToChuc: '/gioi-thieu-thu-vien/so-do-to-chuc-hoat-dong',
    vanBanPhapQuy: '/gioi-thieu-thu-vien/tong-hop-cac-van-ban-phap-quy-ve-hoat-dong-thu-vien',
  },

  // Dịch vụ
  dichVu: {
    goc: '/service',
    chiTiet: '/service/detail-service',
  },

  // Chuyên mục
  chuyenMuc: {
    goc: '/category',
    thongBao: '/category/thong-bao',
    tinTuc: '/category/tin-tuc',
  },

  // Route động
  service: {
    theoSlug: (slug: string) => `/${slug}`,
  },
};

export default routes;
