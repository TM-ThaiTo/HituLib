import { ENDPOINTS_PORTAL } from '@/constants/url-api';
import { fetchApi } from '@/lib/fetcher';
import { IntroductionType } from '@/types/portal';

const defaultLang = 1;

/**
 * Lấy thông tin giới thiệu chung của cổng thông tin theo ngôn ngữ.
 *
 * Hàm này gửi yêu cầu HTTP GET đến endpoint cấu hình trong `ENDPOINTS_PORTAL.INTRODUCTION`
 * và nhận về dữ liệu dạng `IntroductionType` tùy thuộc vào ngôn ngữ được truyền vào.
 *
 * @param {number} [lang=defaultLang] - Mã ngôn ngữ cần lấy dữ liệu (mặc định là `defaultLang`).
 * @returns {Promise<IntroductionType | null>} - Trả về một Promise chứa dữ liệu kiểu `IntroductionType` nếu thành công,
 * hoặc `null` nếu có lỗi xảy ra trong quá trình lấy dữ liệu.
 *
 * @example
 * getGioiThieuChung(1)
 *   .then((data) => {
 *     if (data) {
 *       console.log('Thông tin giới thiệu:', data);
 *     } else {
 *       console.log('Không có dữ liệu.');
 *     }
 *   });
 */
const getGioiThieuChung = (lang: number = defaultLang): Promise<IntroductionType | null> => {
  const endpoint = `${ENDPOINTS_PORTAL.INTRODUCTION}/?lang=${lang}`;

  if (!endpoint) {
    console.error('Lỗi khi lấy chi tiết giới thiệu:');
    return Promise.resolve(null);
  }

  return fetchApi<IntroductionType>(endpoint, {
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

export { getGioiThieuChung };
