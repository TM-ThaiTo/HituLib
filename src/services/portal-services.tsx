'use server';

import { ENDPOINTS_PORTAL } from '@/contains/url-api';
import { fetchApi } from '@/lib/fetcher';
import { MenuNavigations, FooterType, NewDetailType } from '@/types/protal';

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
  return fetchApi<MenuNavigations>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then(res => res.data);
};


/**
 * Lấy dữ liệu chân trang (footer) từ API dựa trên ngôn ngữ.
 *
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ (ví dụ: 1 cho tiếng Việt, 2 cho tiếng Anh).
 * @returns {Promise<FooterType>} Promise trả về dữ liệu footer.
 *
 * @example
 * const footer = await getFooter();     // Lấy footer với ngôn ngữ mặc định
 * const footerEn = await getFooter(2);  // Lấy footer bằng tiếng Anh
 */
const getFooter = async (lang: number = defaultLang) => {
  const endpoint = `${ENDPOINTS_PORTAL.FOOTER}?lang=${lang}`;
  return fetchApi<FooterType>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then(res => res.data);
};

/**
 * Lấy chi tiết tin tức từ API dựa trên ID và ngôn ngữ.
 *
 * Hàm này gửi một yêu cầu GET tới endpoint chi tiết tin tức và trả về dữ liệu tin tức tương ứng.
 * Mặc định, nếu không truyền ngôn ngữ, sẽ sử dụng `defaultLang`.
 *
 * @param {number} id - ID của tin tức cần lấy.
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ (ví dụ: 1 cho tiếng Việt, 2 cho tiếng Anh).
 * @returns {Promise<NewDetailType>} Promise trả về dữ liệu chi tiết của tin tức.
 *
 * @example
 * const detail = await getDetailNews(123); // Lấy tin tức ID 123 với ngôn ngữ mặc định
 * const detailEn = await getDetailNews(123, 2); // Lấy tin tức ID 123 bằng tiếng Anh
 */
const getDetailNews = (id: number, lang: number = defaultLang) => {
  const endpoint = `${ENDPOINTS_PORTAL.DETAIL_NEWS}/${id}?lang=${lang}`;
  return fetchApi<NewDetailType>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then(res => res.data);
};

export { getMenuNavigation, getFooter, getDetailNews };
