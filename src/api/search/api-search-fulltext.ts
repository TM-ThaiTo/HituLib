import { ENDPOINTS_SEARCH } from '@/constants/url-api';
import { fetchApi } from '@/lib/fetcher';


/**
 * Lấy kết quả tìm kiếm fulltext.
 *
 * @param {string} query - Từ khóa tìm kiếm.
 * @returns {Promise<any>} Promise trả về kết quả tìm kiếm.
 */
const getSearchFulltext = async (query: string) => {
    const endpoint = `${ENDPOINTS_SEARCH.FULLTEXT}?q=${query}`;
    return fetchApi(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
};

export { getSearchFulltext };