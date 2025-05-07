import { ENDPOINTS_PORTAL } from "@/contains/url-api";
import { fetchApi } from "@/lib/fetcher";
import { MenuNavigation } from "@/types/header";

const getMenuNavigation = async () => {
    const response = await fetchApi<MenuNavigation>(`${ENDPOINTS_PORTAL.MENU_NAVIGATION}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    return response.data;
}

export default getMenuNavigation;