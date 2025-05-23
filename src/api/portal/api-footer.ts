import { ENDPOINTS_PORTAL } from '@/constants/url-api';
import { fetchApi } from '@/lib/fetcher';
import { FooterType } from '@/types/protal';

const defaultLang = 1;

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
const getFooter = (lang: number = defaultLang): Promise<FooterType | null> => {
  const endpoint = `${ENDPOINTS_PORTAL.FOOTER}?lang=${lang}`;
  return fetchApi<FooterType>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      console.error('Lỗi lấy footer:', error);
      return null;
    });
};

export { getFooter };
