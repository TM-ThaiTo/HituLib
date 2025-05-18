'use server';

import { ENDPOINTS_PORTAL } from '@/constants/url-api';
import { fetchApi } from '@/lib/fetcher';
import {
  MenuNavigations,
  FooterType,
  NewDetailType,
  NewEventsType,
  BannersType,
  DetailServiceType,
} from '@/types/protal';

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

/**
 * Lấy danh sách tin tức mới nhất theo ngôn ngữ.
 *
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ (mặc định là `defaultLang`).
 * @returns {Promise<NewEventsType | null>} Promise trả về dữ liệu tin tức hoặc null nếu có lỗi.
 *
 * @example
 * getNews(1).then(data => {
 *   if (data) {
 *     console.log('Tin tức mới:', data);
 *   } else {
 *     console.log('Không lấy được tin tức');
 *   }
 * });
 */
const getNews = (lang: number = defaultLang): Promise<NewEventsType | null> => {
  const endpoint = `${ENDPOINTS_PORTAL.NEW_LATEST}/?lang=${lang}`;
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

/**
 * Lấy danh sách banner theo ngôn ngữ.
 *
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ (mặc định là `defaultLang`).
 * @returns {Promise<BannersType | null>} Promise trả về dữ liệu banner hoặc null nếu có lỗi.
 *
 * @example
 * getBanners(1).then(data => {
 *   if (data) {
 *     console.log('Danh sách banner:', data);
 *   } else {
 *     console.log('Không lấy được banner');
 *   }
 * });
 */
const getBanners = (lang: number = defaultLang): Promise<BannersType | null> => {
  const endpoint = `${ENDPOINTS_PORTAL.BANNER}/?lang=${lang}`;
  return fetchApi<BannersType>(endpoint, {
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


const getServiceById = (id: number | string, lang: number = defaultLang): Promise<DetailServiceType | null> => {
  const endpoint = `${ENDPOINTS_PORTAL.DETAIL_SERVICE_BY_ID}/${id}/?lang=${lang}`;
  return fetchApi<DetailServiceType>(endpoint, {
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
}
export { getMenuNavigation, getFooter, getDetailNews, getNews, getBanners, getServiceById };
