"use client";

import Image from "next/image";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CustomImage = ({
  src,
  alt = "image",
  className,
  width,
  height,
  quality = 80,
  fallback = null,
  mainCSS ="h-auto",
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative w-auto  ${mainCSS}`}>
      {isLoading && (
        <SkeletonTheme baseColor="#161421" highlightColor="#2B2740">
          <Skeleton
            height="100%"
            width="100%"
            containerClassName="absolute inset-0"
            baseColor="#161421"
            highlightColor="#2B2740"
          />
        </SkeletonTheme>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...props}
        onLoadingComplete={handleLoadingComplete}
        className={`transition-opacity duration-300 object-cover rounded-lg ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        quality={quality}
        onError={() => setIsLoading(false)}
      />
      {!src && fallback && !isLoading && (
        <div className="fallback">{fallback}</div>
      )}
    </div>
  );
};
