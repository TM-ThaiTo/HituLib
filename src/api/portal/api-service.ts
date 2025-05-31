import { ENDPOINTS_PORTAL } from '@/constants/url-api';
import { fetchApi } from '@/lib/fetcher';
import { DetailServicesType, DetailServiceType } from '@/types/portal';

const defaultLang = 1;

/**
 * Lấy thông tin chi tiết của một dịch vụ theo ID.
 *
 * @param {number | string} id - ID của dịch vụ cần lấy chi tiết.
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ (ví dụ: 1 = tiếng Việt, 2 = tiếng Anh...).
 * @returns {Promise<DetailServiceType | null>} Promise trả về chi tiết dịch vụ hoặc null nếu có lỗi.
 *
 * @example
 * const service = await getServiceById(5);
 * if (service) {
 *   console.log(service.tieuDe);
 * }
 */
const getServiceById = (
  id: number | string,
  lang: number = defaultLang,
): Promise<DetailServiceType | null> => {
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
};

/**
 * Lấy danh sách các dịch vụ nổi bật.
 *
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ (ví dụ: 1 = tiếng Việt, 2 = tiếng Anh...).
 * @returns {Promise<DetailServicesType | null>} Promise trả về danh sách dịch vụ hoặc null nếu có lỗi.
 *
 * @example
 * const featuredServices = await getServiceFeatured();
 * if (featuredServices) {
 *   featuredServices.forEach(service => console.log(service.tieuDe));
 * }
 */
const getServiceFeatured = (lang: number = defaultLang): Promise<DetailServicesType | null> => {
  const endpoint = `${ENDPOINTS_PORTAL.SERVICE_FEATURED}/?lang=${lang}`;
  return fetchApi<DetailServicesType>(endpoint, {
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

export { getServiceById, getServiceFeatured };
