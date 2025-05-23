import { ENDPOINTS_PORTAL } from '@/constants/url-api';
import { fetchApi } from '@/lib/fetcher';
import { MenuNavigationsType } from '@/types/protal';

const defaultLang = 1;

/**
 * Lấy dữ liệu điều hướng menu từ API dựa trên ngôn ngữ.
 *
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ (ví dụ: 1 cho tiếng Việt, 2 cho tiếng Anh).
 * @returns {Promise<MenuNavigations>} Promise trả về dữ liệu menu điều hướng.
 *
 * @example
 * const menu = await getMenuNavigation();     // Lấy menu với ngôn ngữ mặc định
 * const menuEn = await getMenuNavigation(2);  // Lấy menu bằng tiếng Anh
 */
const getMenuNavigation = async (lang: number = defaultLang) => {
  const endpoint = `${ENDPOINTS_PORTAL.MENU_NAVIGATION}?lang=${lang}`;
  return fetchApi<MenuNavigationsType>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => res.data);
};

export { getMenuNavigation };
