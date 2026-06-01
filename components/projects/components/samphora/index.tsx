"use client";

import { useState, useRef, useEffect } from 'react';

// import: styles
import './index.css';

const PREVIEW_WIDTH = 'min(32px, 8vw)';
const PREVIEW_GAP = 'min(16px, 4vw)';
const CAROUSEL_PREVIEW_TRANSLATE_Y_ON_HOVER = '28px';
const CYCLING_INTERVAL = 2000; // 2 seconds

// import: assets
// import: config
import { images } from '../../../../config/samphora/image-config';

// import: constants
// import: utils
// import: services
// import: redux
// import: components
// import: lazy load components

export default function Samphora() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [cycleIndex, setCycleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageKeys = Object.keys(images);

  // Determine which image to display (hovering takes priority)
  const displayedImage = hoveredImage || (isInViewport ? imageKeys[cycleIndex] : null);

  // Intersection Observer to detect viewport visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentVisible(!document.hidden);
    };

    handleVisibilityChange();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Cycling interval effect
  useEffect(() => {
    // Only cycle if in viewport, document is visible, and not hovering
    if (!isInViewport || hoveredImage || !isDocumentVisible) return;

    const interval = setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % imageKeys.length);
    }, CYCLING_INTERVAL);

    return () => clearInterval(interval);
  }, [isInViewport, hoveredImage, isDocumentVisible, imageKeys.length]);

  return (
    <div
      ref={containerRef}
      id="samphora"
      className="samphora-landing-page"
    >

      {Object.values(images).map((image) => (
        <div
          key={`bg-${image.id}`}
          id={`bg-${image.id}`}
          className={`samphora-image-background z-[-1] blur-xs lg:blur-none ${(displayedImage === image.id) ? 'samphora-image-background-active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgb(0,0,0,0.6), rgb(0,0,0,0.6)), url(${image.image})`,
          }}
        />
      ))}
      <div className='w-full h-full flex flex-col lg:flex-row justify-between items-center'>
        <div className='hidden lg:block'></div>
        <div className='w-[50%] h-[80%] lg:h-full relative'>
          {Object.values(images).map((image, index) => {
            const counter = index - Math.floor(Object.keys(images).length / 2);

            let leftBound = `calc(50% - ((var(--samphora-preview-width) / 2) + (${Math.abs(counter)} * (var(--samphora-preview-gap) + var(--samphora-preview-width)))))`;
            let rightBound = `calc(50% + ((var(--samphora-preview-width) / 2) + (${Math.abs(counter)} * var(--samphora-preview-gap)) + ((${Math.abs(counter)} - 1) * var(--samphora-preview-width))))`;
            if (counter > 0) {
              leftBound = `calc(50% + ((var(--samphora-preview-width) / 2) + (${Math.abs(counter)} * var(--samphora-preview-gap)) + ((${Math.abs(counter)} - 1) * var(--samphora-preview-width))))`;
              rightBound = `calc(50% - ((var(--samphora-preview-width) / 2) + (${Math.abs(counter)} * (var(--samphora-preview-gap) + var(--samphora-preview-width)))))`;
            }
            return (
              <div
                key={`carousel-image-preview-${image.title}`}
                id={`carousel-image-preview-${image.title}`}
                className={'samphora-carousel-image-preview'}
                style={{ left: leftBound, right: rightBound }}
              >
                <div
                  id={`${image.title}-carousel-preview-content`}
                  className={'samphora-carousel-preview-content'}
                >
                  <div
                    id={`carousel-${image.title}-image-overlay`}
                    className={'samphora-carousel-image-overlay'}
                    onMouseEnter={() => {
                      setHoveredImage(image.id);
                    }}
                    onMouseLeave={() => {
                      setHoveredImage(null);
                    }}
                  />
                  <div
                    id={`${image.title}-title-preview`}
                    className={`samphora-title-preview-div text-center 
                      ${displayedImage === image.id ? 'samphora-title-preview-div-on-hover' : ''}`}
                  >
                    <p className="text-white text-[12px] tracking-[4%]">
                      <i>{image.title}</i>
                    </p>
                  </div>
                  <div
                    id={`${image.title}-carousel-image`}
                    className="samphora-carousel-image"
                    style={{
                      backgroundImage: `url(${image.image})`,
                      transform: displayedImage === image.id
                        ? `translateY(-${CAROUSEL_PREVIEW_TRANSLATE_Y_ON_HOVER})`
                        : undefined,
                    }}
                  />
                  <div
                    id={`${image.title}-dot`}
                    className={`samphora-carousel-dot ${displayedImage === image.id ? 'samphora-carousel-dot-active' : ''}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
