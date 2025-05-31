import { ENDPOINTS_PORTAL } from '@/constants/url-api';
import { fetchApi } from '@/lib/fetcher';
import { NewDetailType, NewEventsType } from '@/types/portal';

const defaultLang = 1;

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
const getDetailNewById = (
  id: number,
  lang: number = defaultLang,
): Promise<NewDetailType | null> => {
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
const getNewLastest = (lang: number = defaultLang): Promise<NewEventsType | null> => {
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

export { getDetailNewById, getNewLastest };
