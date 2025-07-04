"use client";

import { useEffect, useRef, useState } from "react";
import { IMAGE_PRELOAD_CONFIG } from "../constants";

export function useImagePreloadObserver(elementRef?: React.RefObject<HTMLDivElement>) {
  const [shouldLoadImages, setShouldLoadImages] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const internalRef = useRef<HTMLDivElement>(null);
  const refToUse = elementRef || internalRef;

  useEffect(() => {
    const currentRef = refToUse.current;
    
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= IMAGE_PRELOAD_CONFIG.intersectionRatio) {
            setShouldLoadImages(true);
            setHasInitialized(true);
            // Once we start loading, we don't need to observe anymore
            observer.unobserve(currentRef);
          }
        });
      },
      {
        threshold: IMAGE_PRELOAD_CONFIG.threshold,
        rootMargin: IMAGE_PRELOAD_CONFIG.rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return { shouldLoadImages, hasInitialized, elementRef: refToUse };
}