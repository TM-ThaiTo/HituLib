import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mapImagePath(path: string): string {
  const relativePath = path.replace(/^(\.\.\/)+Upload\//, '');
  const image_url = process.env.IMAGE_URL;
  return `${image_url}/${relativePath}`;
}
