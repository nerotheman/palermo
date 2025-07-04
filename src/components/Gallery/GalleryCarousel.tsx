/// <reference path="../../../typing.d.ts" />
"use client";

import React, { useRef, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useGetLocale } from "@/config";
import Autoplay from "embla-carousel-autoplay";
import FadeUp from "@/components/ui/FadeUp";

// Custom hooks
import { useImagePreloadObserver } from "./hooks/useImagePreloadObserver";
import { useAutoplayObserver } from "./hooks/useAutoplayObserver";
import { useCarouselState } from "./hooks/useCarouselState";
import { useImageLoading } from "./hooks/useImageLoading";

// Components
import { GalleryHeader } from "./GalleryHeader";
import { CarouselImage } from "./CarouselImage";
import { CarouselControls } from "./CarouselControls";

// Constants
import { AUTOPLAY_CONFIG, CAROUSEL_CONFIG } from "./constants";

interface GalleryCarouselProps {
  galleryData: GallerySection;
}

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({
  galleryData,
}) => {
  const locale = useGetLocale();
  const title = galleryData.title?.[locale] || "";
  const description = galleryData.description?.[locale] || "";
  
  // Refs
  const plugin = useRef(Autoplay(AUTOPLAY_CONFIG));
  
  // Shared ref for both observers
  const sharedElementRef = useRef<HTMLDivElement>(null);
  
  // Custom hooks - separate observers for preloading vs autoplay using shared ref
  const { shouldLoadImages, hasInitialized } = useImagePreloadObserver(sharedElementRef);
  
  const handleAutoplayEnter = useCallback(() => {
    plugin.current.play();
  }, []);

  const handleAutoplayLeave = useCallback(() => {
    plugin.current.stop();
  }, []);

  const { isInView } = useAutoplayObserver({
    onEnterView: handleAutoplayEnter,
    onLeaveView: handleAutoplayLeave,
    elementRef: sharedElementRef,
  });

  const { api, setApi, current, count, scrollTo } = useCarouselState();
  const { markImageAsLoaded, isImageLoaded } = useImageLoading(
    galleryData.images,
    shouldLoadImages,
    hasInitialized
  );

  // Event handlers
  const handleMouseEnter = useCallback(() => {
    if (isInView) plugin.current.stop();
  }, [isInView]);

  const handleMouseLeave = useCallback(() => {
    if (isInView) plugin.current.play();
  }, [isInView]);

  const handleImageLoad = useCallback((imageKey: string) => {
    markImageAsLoaded(imageKey);
  }, [markImageAsLoaded]);

  // Early return if no images
  if (!galleryData.images || galleryData.images.length === 0) {
    return null;
  }

  return (
    <section className="relative h-full w-screen bg-accent-soft-apricot py-40">
      <div className="container flex flex-col items-center">
        <GalleryHeader title={title} description={description} />

        <FadeUp delay={0.3} className="relative mt-12 w-full">
          <div ref={sharedElementRef}>
            <Carousel
              setApi={setApi}
              opts={CAROUSEL_CONFIG}
              plugins={[plugin.current]}
              className="relative w-full overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CarouselContent className="-ml-4">
                {galleryData.images.map((image, index) => (
                  <CarouselItem key={image._key} className="basis-full pl-4">
                    <CarouselImage
                      image={image}
                      index={index}
                      shouldLoadImages={shouldLoadImages}
                      hasInitialized={hasInitialized}
                      isLoaded={isImageLoaded(image._key)}
                      onLoad={() => handleImageLoad(image._key)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselControls
                current={current}
                count={count}
                onSlideChange={scrollTo}
              />
            </Carousel>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};