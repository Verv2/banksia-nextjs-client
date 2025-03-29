/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import type { LightGallerySettings } from "lightgallery/lg-settings";

// Import LightGallery plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";

// Import LightGallery styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

interface PropertyImage {
  src: string;
  alt: string;
  thumbnail?: string;
}

interface PropertyGalleryProps {
  images: PropertyImage[];
}

const ImageGallery = ({ images }: PropertyGalleryProps) => {
  const [mounted, setMounted] = useState(false);
  const lightGalleryRef = useRef<any>(null);

  // Only render the gallery on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const gallerySettings: LightGallerySettings = {
    speed: 500,
    plugins: [lgThumbnail, lgZoom, lgFullscreen],
    thumbnail: true,
    animateThumb: true,
    zoomFromOrigin: true,
    allowMediaOverlap: true,
    toggleThumb: true,
  };

  const openGallery = (index: number) => {
    if (lightGalleryRef.current) {
      lightGalleryRef.current.openGallery(index);
    }
  };

  if (!mounted) {
    // Return a placeholder with the same structure during SSR
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-2 h-80 bg-muted rounded-lg overflow-hidden relative">
          <div className="w-full h-full" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-[152px] bg-muted rounded-lg overflow-hidden relative"
            >
              <div className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hidden LightGallery component */}
      <div className="hidden">
        <LightGallery
          elementClassNames="hidden"
          onInit={(ref) => {
            if (ref) {
              lightGalleryRef.current = ref.instance;
            }
          }}
          {...gallerySettings}
        >
          {images.map((image, index) => (
            <a
              key={index}
              href={image.src}
              data-src={image.src}
              data-sub-html={`<h4>${image.alt}</h4>`}
            >
              <img
                src={image.thumbnail || image.src}
                alt={image.alt}
                className="hidden"
              />
            </a>
          ))}
        </LightGallery>
      </div>

      {/* Visible gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div
          className="md:col-span-2 h-80 bg-muted rounded-lg overflow-hidden relative cursor-pointer"
          onClick={() => openGallery(0)}
        >
          <Image
            src={images[0].src || "/placeholder.svg"}
            alt={images[0].alt}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 hover:opacity-100 font-medium">
              View Gallery
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="h-[152px] bg-muted rounded-lg overflow-hidden relative cursor-pointer"
              onClick={() => openGallery(index + 1)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              {index === 3 && images.length > 5 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white font-semibold">
                  +{images.length - 5} more
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
