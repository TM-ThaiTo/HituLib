type RouteItem = {
  path: string;
  title: string;
};

const routes = {
  trangChu: { path: '/', title: 'Trang chủ' },

  gioiThieuThuVien: {
    goc: { path: '/gioi-thieu-thu-vien', title: 'Giới thiệu Thư viện' },
    gioiThieuChung: { path: '/gioi-thieu-thu-vien/gioi-thieu-chung', title: 'Giới thiệu chung' },
    hinhAnhHoatDong: {
      path: '/gioi-thieu-thu-vien/hinh-anh-hoat-dong',
      title: 'Hình ảnh hoạt động',
    },
    lichLamViec: {
      path: '/gioi-thieu-thu-vien/lich-lam-viec-cua-thu-vien',
      title: 'Lịch làm việc của thư viện',
    },
    noiQuy: { path: '/gioi-thieu-thu-vien/noi-quy-thu-vien', title: 'Nội quy thư viện' },
    quyDinhSuDung: {
      path: '/gioi-thieu-thu-vien/quy-dinh-su-dung-thu-vien',
      title: 'Quy định sử dụng thư viện',
    },
    quyTrinhLamViec: {
      path: '/gioi-thieu-thu-vien/quy-trinh-lam-viec',
      title: 'Quy trình làm việc',
    },
    soDoToChuc: {
      path: '/gioi-thieu-thu-vien/so-do-to-chuc-hoat-dong',
      title: 'Sơ đồ tổ chức hoạt động',
    },
    vanBanPhapQuy: {
      path: '/gioi-thieu-thu-vien/tong-hop-cac-van-ban-phap-quy-ve-hoat-dong-thu-vien',
      title: 'Tổng hợp các văn bản pháp quy về hoạt động thư viện',
    },
  },

  dichVu: {
    goc: { path: '/service', title: 'Dịch vụ ' },
    dichVuNoiBat: { path: '/service/featured-service', title: 'Dịch vụ nổi bật' },
    dichVuNoiBatChiTiet: {
      path: '/service/featured-service/detail-service',
      title: 'Chi tiết dịch vụ',
    },
    dichVuThuVien: { path: '/service/library-service', title: 'Dịch vụ thư viện' },
  },

  opac: {
    goc: { path: '/opac', title: 'OPAC' },
    barcode: { path: '/opac/barcode', title: 'Quét mã vạch/QR tài liệu' },
    search: { path: '/opac/search', title: 'Tìm kiếm tài liệu' },
  },

  chuyenMuc: {
    goc: { path: '/category', title: 'Phân loại' },
    thongBao: { path: '/category/thong-bao', title: 'Thông báo' },
    tinTuc: { path: '/category/tin-tuc', title: 'Tin tức' },
    thuCamOn: { path: '/category/thu-cam-on', title: 'Thư cảm ơn' },
    huongDan: { path: '/category/huong-dan', title: 'Hướng dẫn' },
  },

  tintuc: {
    goc: { path: '/news', title: 'Tin tức' },
    theoSlug: (slug: string): RouteItem => ({
      path: `/${slug}`,
      title: slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    }),
  },

  service: {
    theoSlug: (slug: string): RouteItem => ({
      path: `/${slug}`,
      title: slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    }),
  },
} as const;

export default routes;
