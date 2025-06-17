'use server';

import { getLocale } from 'next-intl/server';

export default async function mapLangToNumber(): Promise<number> {
  const locale = await getLocale();
  switch (locale) {
    case 'vi':
      return 1; // Tiếng Việt
    case 'en':
      return 2; // Tiếng Anh
    case 'fr':
      return 3; // Tiếng Pháp
    case 'ja':
      return 4; // Tiếng Nhật
    case 'zh':
      return 5; // Tiếng Trung
    default:
      return 1; // Mặc định là tiếng Việt nếu không nhận diện được ngôn ngữ
  }
}
