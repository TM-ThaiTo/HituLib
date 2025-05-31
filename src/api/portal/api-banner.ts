import { ENDPOINTS_PORTAL } from '@/constants/url-api';
import { fetchApi } from '@/lib/fetcher';
import { BannersType } from '@/types/portal';

const defaultLang = 1;

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

export { getBanners };
