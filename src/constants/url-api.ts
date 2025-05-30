const APIPORTAL = '/api/portal';
const APISEARCH = '/api/search';

const ENDPOINTS_PORTAL = {
  BANNER: `${APIPORTAL}/banner/active`, //  `/api/portal/banner/active`
  MENU_NAVIGATION: `${APIPORTAL}/menu/navigation`, // `/api/portal/menu/navigation`
  FOOTER: `${APIPORTAL}/footer`, // `/api/portal/footer`
  DETAIL_NEWS: `${APIPORTAL}/news`, // /api/portal/news/{id}
  NEW_LATEST: `${APIPORTAL}/news/latest`, // `/api/portal/news/latest`
  DETAIL_SERVICE_BY_ID: `${APIPORTAL}/service`, // `/api/portal/service/{id}`
  SERVICE_FEATURED: `${APIPORTAL}/service/featured`, //  `/api/portal/service/featured
  INTRODUCTION: `${APIPORTAL}/gioithieu`, // api/portal/gioithieu
  LIBRARY_SERVICES: `${APIPORTAL}/libraryservices`, // `/api/portal/libraryservices`
  LIBRARY_SERVICE_ID: `${APIPORTAL}/libraryservice`, //`/api/portal/libraryservice/{id}`
};

const ENDPOINTS_SEARCH = {
  FULLTEXT: `${APISEARCH}/fulltext`, // `/api/search/fulltext`
};

export { ENDPOINTS_PORTAL, ENDPOINTS_SEARCH };
