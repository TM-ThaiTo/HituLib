import { ENDPOINTS_PORTAL } from '@/constants/url-api';
import { fetchApi } from '@/lib/fetcher';
import { LibraryservicesType, LibraryserviceType } from '@/types/protal';
const defaultLang = 1;

/**
 * Lấy danh sách các dịch vụ thư viện theo ngôn ngữ.
 *
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ (ví dụ: 1 = tiếng Việt, 2 = tiếng Anh...).
 * @returns {Promise<LibraryservicesType | null>} - Promise trả về danh sách dịch vụ hoặc null nếu có lỗi.
 *
 * @example
 * const services = await getLibraryServices();
 * if (services) {
 *   services.forEach(service => console.log(service.name));
 * }
 */
const getLibraryServices = (lang: number = defaultLang): Promise<LibraryservicesType | null> => {
  const endpoint = `${ENDPOINTS_PORTAL.LIBRARY_SERVICES}/?lang=${lang}`;

  return fetchApi<LibraryservicesType>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      console.error('Lỗi khi lấy dịch vụ thư viện:', error);
      return null;
    });
};

/**
 * Lấy chi tiết một dịch vụ thư viện theo ID và ngôn ngữ.
 *
 * @param {number} id - ID của dịch vụ cần lấy.
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ, ví dụ: 1 = tiếng Việt, 2 = tiếng Anh.
 * @returns {Promise<LibraryserviceType | null>} - Trả về chi tiết dịch vụ hoặc null nếu có lỗi.
 */
const getLibraryServiceById = (
  id: number,
  lang: number = defaultLang,
): Promise<LibraryserviceType | null> => {
  const endpoint = `${ENDPOINTS_PORTAL.LIBRARY_SERVICE_ID}/${id}?lang=${lang}`;

  return fetchApi<LibraryserviceType>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      console.error('Lỗi khi lấy dịch vụ thư viện:', error);
      return null;
    });
};

export { getLibraryServices, getLibraryServiceById };
