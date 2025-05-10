import { ApiResponse } from '@/types/api';

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> {
  const baseUrl = process.env.BACKEND_URL || '';

  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error: ${res.status} - ${errorText}`);
  }

  const json = await res.json();

  if (!('data' in json && 'traceId' in json && 'responseTime' in json)) {
    throw new Error('Invalid API response format');
  }

  return json as ApiResponse<T>;
}
