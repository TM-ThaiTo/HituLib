import routes from '@/constants/routes';

// Helper function to filter out function routes
const filterStaticRoutes = (obj: Record<string, any>): any[] => {
  return Object.values(obj).filter(
    (item): item is { path: string; translationKey: string } =>
      item !== null && typeof item === 'object' && 'path' in item && 'translationKey' in item,
  );
};

export const DataBreadcrumb = [
  routes.trangChu,
  ...filterStaticRoutes(routes.gioiThieuThuVien),
  ...filterStaticRoutes(routes.dichVu),
  ...filterStaticRoutes(routes.chuyenMuc),
  ...filterStaticRoutes(routes.opac),
  routes.tintuc.goc,
];
