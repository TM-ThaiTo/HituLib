const APIPORTAL = '/api/portal';

const ENDPOINTS_PORTAL = {
  BANNER: `${APIPORTAL}/banner/active`, //  `/api/portal/banner/active`
  MENU_NAVIGATION: `${APIPORTAL}/menu/navigation`, // `/api/portal/menu/navigation`
  FOOTER: `${APIPORTAL}/footer`, // `/api/portal/footer`
  DETAIL_NEWS: `${APIPORTAL}/news`, // /api/portal/news/{id}
  NEW_LATEST: `${APIPORTAL}/news/latest`, // `/api/portal/news/latest`
  DETAIL_SERVICE_BY_ID: `${APIPORTAL}/service`, // `/api/portal/service/{id}`
  SERVICE_FEATURED: `${APIPORTAL}/service/featured`, //  `/api/portal/service/featured
};

export { ENDPOINTS_PORTAL };
