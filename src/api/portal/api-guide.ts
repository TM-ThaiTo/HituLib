import { ENDPOINTS_PORTAL } from '@/constants/url-api';
import { fetchApi } from '@/lib/fetcher';
import { GuidesType, GuideType } from '@/types/protal';

const defaultLang = 1;

/**
 * Lấy danh sách hướng dẫn.
 *
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ (mặc định là `defaultLang`).
 * @returns {Promise<GuidesType | null>} Promise trả về danh sách hướng dẫn hoặc null nếu có lỗi.
 */
const getGuides = async (lang: number = defaultLang): Promise<GuidesType | null> => {
  const endpoint = `${ENDPOINTS_PORTAL.GUIDES}?lang=${lang}`;
  return fetchApi<GuidesType>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      console.error('Lỗi khi lấy danh sách hướng dẫn:', error);
      return null;
    });
};

/**
 * Lấy chi tiết hướng dẫn theo ID.
 *
 * @param {number} id - ID của hướng dẫn.
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ (mặc định là `defaultLang`).
 * @returns {Promise<GuideType | null>} Promise trả về chi tiết hướng dẫn hoặc null nếu có lỗi.
 */
const getGuideById = async (id: number, lang: number = defaultLang): Promise<GuideType | null> => {
  const endpoint = `${ENDPOINTS_PORTAL.GUIDES_ID}/${id}?lang=${lang}`;
  return fetchApi<GuideType>(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      console.error('Lỗi khi lấy chi tiết hướng dẫn:', error);
      return null;
    });
};

export { getGuides, getGuideById };
