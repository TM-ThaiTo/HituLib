type ApiResponse<T> = {
    data: T;
    traceId: string;
    responseTime: number;
    metadata: Record<string, any>;
};

export { ApiResponse };