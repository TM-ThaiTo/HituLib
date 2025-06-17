type RouteItem = {
  path: string;
  translationKey: string;
};

const routes = {
  trangChu: { path: '/', translationKey: 'routes.home' },

  gioiThieuThuVien: {
    goc: { path: '/gioi-thieu-thu-vien', translationKey: 'routes.library_introduction.title' },
    gioiThieuChung: {
      path: '/gioi-thieu-thu-vien/gioi-thieu-chung',
      translationKey: 'routes.library_introduction.general_introduction',
    },
    hinhAnhHoatDong: {
      path: '/gioi-thieu-thu-vien/hinh-anh-hoat-dong',
      translationKey: 'routes.library_introduction.photos_of_activities',
    },
    lichLamViec: {
      path: '/gioi-thieu-thu-vien/lich-lam-viec-cua-thu-vien',
      translationKey: 'routes.library_introduction.working_hours',
    },
    noiQuy: {
      path: '/gioi-thieu-thu-vien/noi-quy-thu-vien',
      translationKey: 'routes.library_introduction.library_regulations',
    },
    quyDinhSuDung: {
      path: '/gioi-thieu-thu-vien/quy-dinh-su-dung-thu-vien',
      translationKey: 'routes.library_introduction.usage_regulations',
    },
    quyTrinhLamViec: {
      path: '/gioi-thieu-thu-vien/quy-trinh-lam-viec',
      translationKey: 'routes.library_introduction.working_procedures',
    },
    soDoToChuc: {
      path: '/gioi-thieu-thu-vien/so-do-to-chuc-hoat-dong',
      translationKey: 'routes.library_introduction.organization_diagram',
    },
    vanBanPhapQuy: {
      path: '/gioi-thieu-thu-vien/tong-hop-cac-van-ban-phap-quy-ve-hoat-dong-thu-vien',
      translationKey: 'routes.library_introduction.legal_documents',
    },
  },

  dichVu: {
    goc: { path: '/service', translationKey: 'routes.services.title' },
    dichVuNoiBat: {
      path: '/service/featured-service',
      translationKey: 'routes.services.featured_services',
    },
    dichVuNoiBatChiTiet: {
      path: '/service/featured-service/detail-service',
      translationKey: 'routes.services.service_details',
    },
    dichVuThuVien: {
      path: '/service/library-service',
      translationKey: 'routes.services.library_services',
    },
  },

  opac: {
    goc: { path: '/opac', translationKey: 'routes.opac.title' },
    barcode: {
      path: '/opac/barcode',
      translationKey: 'routes.opac.barcode',
    },
    search: {
      path: '/opac/search',
      translationKey: 'routes.opac.search',
    },
    document: {
      path: '/opac/document',
      translationKey: 'routes.opac.document',
    },
  },

  chuyenMuc: {
    goc: { path: '/category', translationKey: 'routes.categories.title' },
    thongBao: {
      path: '/category/thong-bao',
      translationKey: 'routes.categories.announcements',
    },
    tinTuc: {
      path: '/category/tin-tuc',
      translationKey: 'routes.categories.news',
    },
    thuCamOn: {
      path: '/category/thu-cam-on',
      translationKey: 'routes.categories.thank_you_letters',
    },
    huongDan: {
      path: '/category/huong-dan',
      translationKey: 'routes.categories.guides',
    },
  },

  tintuc: {
    goc: { path: '/news', translationKey: 'routes.news.title' },
    theoSlug: (slug: string): RouteItem => ({
      path: `/news/${slug}`,
      translationKey: slug
        .replace(/-/g, ' ')
        .replace(/\.html$/, '')
        .replace(/\b\w/g, (l) => l.toUpperCase()),
    }),
  },

  service: {
    theoSlug: (slug: string): RouteItem => ({
      path: `/${slug}`,
      translationKey: slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    }),
  },
} as const;

export default routes;
