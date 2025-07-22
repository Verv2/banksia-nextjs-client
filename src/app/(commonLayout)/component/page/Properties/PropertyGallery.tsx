"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PropertyGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const totalImages = images.length;
  const isSingleImage = totalImages === 1;
  const isEmpty = totalImages === 0;
  const remainingCount = totalImages - 3;

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % totalImages);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);

  const getNextIndex = (offset: number) =>
    (currentIndex + offset) % totalImages;

  return (
    <div
      className={`${
        isEmpty || isSingleImage
          ? "flex justify-center max-h-[528px]"
          : "flex flex-col lg:grid lg:grid-cols-3 gap-4 max-h-[528px]"
      }`}
    >
      {/* === Main Image / Placeholder === */}
      <div
        className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl ${
          isEmpty || isSingleImage ? "w-full max-w-4xl" : "col-span-2"
        }`}
      >
        <Image
          src={
            isEmpty
              ? "/placeholder.svg"
              : images[currentIndex] || "/placeholder.svg"
          }
          alt="Main property image"
          fill
          className="object-cover"
        />

        {/* Arrows only if multiple images */}
        {totalImages > 1 && (
          <>
            <Button
              size="icon"
              variant="secondary"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <Button
            size="icon"
            variant="secondary"
            onClick={() => setIsLiked(!isLiked)}
            className={`bg-white/90 hover:bg-white shadow-md ${
              isLiked ? "text-[#F16232]" : "text-gray-600"
            }`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/90 hover:bg-white shadow-md"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>

        {/* Image Counter (only if > 1) */}
        {totalImages > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {totalImages}
          </div>
        )}
      </div>

      {/* === Right Thumbnails (desktop) === */}
      {totalImages > 1 && (
        <div className="hidden lg:flex flex-col gap-4">
          {[1, 2].map((offset, i) => {
            const index = getNextIndex(offset);
            if (index >= totalImages) return null;

            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="relative cursor-pointer aspect-video rounded-2xl overflow-hidden shadow-md border-2 hover:border-[#F16232]"
              >
                <Image
                  src={images[index] || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className={`object-cover ${
                    i === 1 && remainingCount > 0 ? "brightness-[0.4]" : ""
                  }`}
                />
                {i === 1 && remainingCount > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-2xl font-semibold bg-black/40 rounded-2xl">
                    +{remainingCount}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* === Bottom Thumbnails (mobile) === */}
      {totalImages > 1 && (
        <div className="flex lg:hidden gap-4 mt-4">
          {[1, 2].map((offset, i) => {
            const index = getNextIndex(offset);
            if (index >= totalImages) return null;

            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="relative flex-1 aspect-video rounded-2xl overflow-hidden shadow-md border-2 hover:border-[#F16232]"
              >
                <Image
                  src={images[index] || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className={`object-cover ${
                    i === 1 && remainingCount > 0 ? "brightness-[0.4]" : ""
                  }`}
                />
                {i === 1 && remainingCount > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-2xl font-semibold bg-black/40 rounded-2xl">
                    +{remainingCount}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
