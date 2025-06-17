'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { IMAGE_URL } from '@/config/env';
import ImagePublic from '@/constants/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  sizes?: string;
  fallbackImage?: string;
  fill?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 80,
  objectFit = 'cover',
  objectPosition = 'center',
  sizes,
  fallbackImage = '/fallback.webp',
  fill = true,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const baseUrl = IMAGE_URL;

    if (src.startsWith('http') || src.startsWith('/')) {
      setImgSrc(src);
    } else {
      let formattedSrc = src.replace(/^(?:\.\.\/)+|^\.\//, '');
      if (formattedSrc.includes('Upload/')) {
        formattedSrc = formattedSrc.substring(formattedSrc.indexOf('Upload/') + 7);
      }
      setImgSrc(`${baseUrl}${formattedSrc}`);
    }
  }, [src]);

  const handleError = () => {
    setImgSrc(ImagePublic.notFound || fallbackImage);
    setError(true);
    setIsLoading(false);
  };

  const handleLoad = () => setIsLoading(false);

  const isExternal =
    imgSrc.startsWith('http') && !imgSrc.includes(process.env.NEXT_PUBLIC_CDN_URL || '');

  const responsiveSizes =
    sizes ||
    (width && width > 640 ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw' : '100vw');

  const imageClassName = cn(
    'transition-all duration-300',
    isLoading ? 'opacity-70' : 'opacity-100',
    error ? 'bg-gray-100' : '',
    className,
  );

  const Loader = (
    <div className="bg-opacity-30 absolute inset-0 z-10 flex items-center justify-center bg-gray-100">
      <div className="border-primary h-6 w-6 animate-spin rounded-full border-2 border-t-transparent" />
    </div>
  );

  // Case: Responsive fill layout
  if (fill || !width || !height) {
    return (
      <div
        className={cn('relative w-full overflow-hidden', className)}
        style={{
          aspectRatio: width && height ? `${width} / ${height}` : undefined,
        }}
      >
        <Image
          src={imgSrc || fallbackImage}
          alt={alt}
          fill
          className={imageClassName}
          priority={priority}
          quality={quality}
          unoptimized={isExternal}
          onError={handleError}
          onLoad={handleLoad}
          style={{ objectFit, objectPosition }}
          sizes={responsiveSizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
        {isLoading && Loader}
      </div>
    );
  }

  // Case: Fixed width & height layout
  return (
    <div className="relative flex items-center justify-center" style={{ width, height }}>
      <Image
        src={imgSrc || fallbackImage}
        alt={alt}
        width={width}
        height={height}
        className={imageClassName}
        priority={priority}
        quality={quality}
        unoptimized={isExternal}
        onError={handleError}
        onLoad={handleLoad}
        style={{ objectFit, objectPosition }}
        sizes={responsiveSizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
      {isLoading && Loader}
    </div>
  );
}
