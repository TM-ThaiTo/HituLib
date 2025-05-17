function getFirstParam(param: string | string[] | undefined, defaultValue: string) {
    if (!param) return defaultValue;
    return Array.isArray(param) ? param[0] : param;
}

function getFirstParamInt(param: string | string[] | undefined, defaultValue: number): number {
    const value = Array.isArray(param) ? param[0] : param;
    const parsed = parseInt(value || '', 10);
    return isNaN(parsed) ? defaultValue : parsed;
}

export {
    getFirstParam,
    getFirstParamInt
}