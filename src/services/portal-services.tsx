import { ENDPOINTS_PORTAL } from '@/contains/url-api';
import { fetchApi } from '@/lib/fetcher';
import { MenuNavigations, FooterType } from '@/types/protal';

const defaultLang = 1;

const getMenuNavigation = async (lang: number = defaultLang) => {
  const endpoint = `${ENDPOINTS_PORTAL.MENU_NAVIGATION}?lang=${lang}`;
  const response = await fetchApi<MenuNavigations>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return response.data;
};

const getFooter = async (lang: number = defaultLang) => {
  const endpoint = `${ENDPOINTS_PORTAL.FOOTER}?lang=${lang}`;
  const response = await fetchApi<FooterType>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return response.data;
};

export { getMenuNavigation, getFooter };
