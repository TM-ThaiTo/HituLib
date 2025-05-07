import { ENDPOINTS_PORTAL } from "@/contains/url-api";

const url = process.env.BACKEND_URL

const getMenuNavigation = async () => {
    const response = await fetch(`${ENDPOINTS_PORTAL.MENU_NAVIGATION}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}

export default getMenuNavigation;