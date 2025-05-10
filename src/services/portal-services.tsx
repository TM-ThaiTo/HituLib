import { ENDPOINTS_PORTAL } from "@/contains/url-api";
import { fetchApi } from "@/lib/fetcher";
import { MenuNavigations } from "@/types/header";

const getMenuNavigation = async () => {
    const response = await fetchApi<MenuNavigations>(`${ENDPOINTS_PORTAL.MENU_NAVIGATION}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    return response.data;
}

export default getMenuNavigation;