'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { IMAGE_URL } from "@/config/env";

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
    objectPosition?: string;
    sizes?: string;
    cdnPrefix?: string;
    fallbackImage?: string;
    fill?: boolean;
}

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    className = "",
    priority = false,
    quality = 80,
    objectFit = "cover",
    objectPosition = "center",
    sizes,
    fallbackImage = "/fallback.webp",
}: OptimizedImageProps) {
    const [imgSrc, setImgSrc] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const baseUrl = IMAGE_URL;

        if (src.startsWith("http") || src.startsWith("/")) {
            setImgSrc(src);
        } else {
            let formattedSrc = src.replace(/^(?:\.\.\/)+|^\.\//, "");

            if (formattedSrc.includes("Upload/")) {
                formattedSrc = formattedSrc.substring(formattedSrc.indexOf("Upload/") + 7);
            }

            setImgSrc(`${baseUrl}${formattedSrc}`);
        }
    }, [src]);

    const handleError = () => {
        setImgSrc(fallbackImage);
        setError(true);
        setIsLoading(false);
    };

    const handleLoad = () => setIsLoading(false);

    const isExternal = imgSrc.startsWith("http") && !imgSrc.includes(process.env.NEXT_PUBLIC_CDN_URL || "");

    const responsiveSizes =
        sizes ||
        (width && width > 640
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            : "100vw");

    const imageClassName = cn(
        "transition-all duration-300",
        isLoading ? "opacity-70" : "opacity-100",
        error ? "bg-gray-100" : "",
        className
    );

    const Loader = (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-30">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    if (width && height) {
        return (
            <div className="relative flex justify-center items-center" style={{ width, height }}>
                <Image
                    src={imgSrc || "/placeholder.webp"}
                    alt={alt}
                    width={width}
                    height={height}
                    className={imageClassName}
                    priority={priority}
                    quality={quality}
                    unoptimized={isExternal}
                    onError={handleError}
                    onLoadingComplete={handleLoad}
                    style={{ objectFit, objectPosition }}
                    sizes={responsiveSizes}
                    loading={priority ? "eager" : "lazy"}
                    fetchPriority={priority ? "high" : "auto"}
                />
                {isLoading && Loader}
            </div>
        );
    }

    return (
        <div className="relative w-full h-48 overflow-hidden flex justify-center items-center">
            <Image
                src={imgSrc || "/Image-not-found.png"}
                alt={alt}
                fill
                className={imageClassName}
                priority={priority}
                quality={quality}
                unoptimized={isExternal}
                style={{ objectFit, objectPosition }}
                onError={handleError}
                onLoadingComplete={handleLoad}
                sizes={responsiveSizes}
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : "auto"}
            />
            {isLoading && Loader}
        </div>
    );
}
