import routes from '@/constants/routes';

export const DataBreadcrumb = [
  routes.trangChu,
  ...Object.values(routes.gioiThieuThuVien),
  ...Object.values(routes.dichVu),
  ...Object.values(routes.chuyenMuc),
  ...Object.values(routes.opac),
  ...Object.values(routes.tintuc),
];
