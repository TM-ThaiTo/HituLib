'use server';

import { ENDPOINTS_PORTAL } from '@/constants/url-api';
import { fetchApi } from '@/lib/fetcher';
import { MenuNavigations, FooterType, NewDetailType, NewEventsType } from '@/types/protal';

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
  }).then((res) => res.data);
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
  }).then((res) => res.data);
};

/**
 * Lấy chi tiết tin tức từ API dựa trên ID và ngôn ngữ.
 *
 * Gửi yêu cầu GET đến endpoint chi tiết tin tức và trả về dữ liệu chi tiết.
 * Nếu có lỗi trong quá trình gọi API, hàm sẽ trả về `null`.
 *
 * @param {number} id - ID của tin tức cần lấy.
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ, ví dụ: 1 = tiếng Việt, 2 = tiếng Anh.
 * @returns {Promise<NewDetailType | null>} Promise trả về đối tượng chi tiết tin tức hoặc `null` nếu có lỗi.
 *
 * @example
 * // Lấy tin tức có ID 123 với ngôn ngữ mặc định
 * const detail = await getDetailNews(123);
 *
 * // Lấy tin tức có ID 123 với ngôn ngữ tiếng Anh (giả sử mã ngôn ngữ là 2)
 * const detailEn = await getDetailNews(123, 2);
 */
const getDetailNews = (id: number, lang: number = defaultLang): Promise<NewDetailType | null> => {
  const endpoint = `${ENDPOINTS_PORTAL.DETAIL_NEWS}/${id}?lang=${lang}`;
  return fetchApi<NewDetailType>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      console.error('Lỗi khi lấy chi tiết tin tức:', error);
      return null;
    });
};

const getNews = (id: number, lang: number = defaultLang): Promise<NewEventsType | null> => {
  const endpoint = `${ENDPOINTS_PORTAL.DETAIL_NEWS}/${id}?lang=${lang}`;
  return fetchApi<NewEventsType>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      console.error('Lỗi khi lấy chi tiết tin tức:', error);
      return null;
    });
};

export { getMenuNavigation, getFooter, getDetailNews };
