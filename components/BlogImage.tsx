'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function BlogImage({ src, alt, className = '' }: BlogImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
        className={`object-cover group-hover:scale-105 transition-transform duration-200 ${className}`}
        priority={true}
        onError={() => setImgSrc('/images/placeholder-blog.jpg')}
        quality={75}
      />
      <div className="absolute inset-0 bg-gray-200 animate-pulse" />
    </>
  );
}