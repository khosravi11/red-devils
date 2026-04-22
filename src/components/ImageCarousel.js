import React, { useEffect, useRef, useState } from "react";

const IMAGE_ORDER = [
  20, 29, 28, 27, 26, 25, 24, 23, 22, 21,
  19, 18, 17, 16, 15, 14, 13, 12, 11,
  10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];

const IMAGES = IMAGE_ORDER.map((imageNumber) => {
  const baseName = `brdCarousel${imageNumber}.webp`;

  return {
    full: `/images/carousel/${baseName}`,
    thumb: `/images/carousel/thumbs/${baseName}`,
  };
});

const AUTOPLAY_DELAY_MS = 4500;
const SWIPE_THRESHOLD_PX = 40;

const wrapIndex = (index, total) => {
  if (total === 0) {
    return 0;
  }

  return (index + total) % total;
};

const ImageCarousel = () => {
  const carouselRootRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);
  const imageCount = IMAGES.length;

  useEffect(() => {
    if (isPaused || imageCount < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1, imageCount));
    }, AUTOPLAY_DELAY_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [imageCount, isPaused]);

  const currentImage = IMAGES[activeIndex];

  useEffect(() => {
    if (imageCount < 2) {
      return;
    }

    const nextImage = new Image();
    nextImage.src = IMAGES[wrapIndex(activeIndex + 1, imageCount)].full;

    const previousImage = new Image();
    previousImage.src = IMAGES[wrapIndex(activeIndex - 1, imageCount)].full;
  }, [activeIndex, imageCount]);

  const goToSlide = (idx) => {
    setActiveIndex(wrapIndex(idx, imageCount));
  };

  const goToPrevious = () => {
    setActiveIndex((current) => wrapIndex(current - 1, imageCount));
  };

  const goToNext = () => {
    setActiveIndex((current) => wrapIndex(current + 1, imageCount));
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    const startX = touchStartXRef.current;
    const endX = event.changedTouches[0]?.clientX ?? null;
    touchStartXRef.current = null;

    if (startX === null || endX === null) {
      return;
    }

    const deltaX = endX - startX;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) {
      return;
    }

    if (deltaX > 0) {
      goToPrevious();
      return;
    }

    goToNext();
  };

  const handleFocusCapture = () => {
    setIsPaused(true);
  };

  const handleBlurCapture = (event) => {
    const nextFocusedElement = event.relatedTarget;
    if (carouselRootRef.current?.contains(nextFocusedElement)) {
      return;
    }

    setIsPaused(false);
  };

  return (
    <section id="gallery" className="bg-black py-5 text-center">
      <div className="container">
        <div
          ref={carouselRootRef}
          className="gallery-carousel mx-auto"
          style={{ maxWidth: "900px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={handleFocusCapture}
          onBlurCapture={handleBlurCapture}
        >
          <div
            className="gallery-stage rounded-3 shadow-lg"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-roledescription="carousel"
            aria-label="Red Devils photo gallery"
          >
            <button
              className="gallery-control gallery-control-prev d-none d-md-flex"
              type="button"
              onClick={goToPrevious}
              aria-label="Show previous slide"
            >
              <span className="gallery-control-icon gallery-control-icon-prev" aria-hidden="true"></span>
            </button>

            <div className="gallery-slide">
              <img
                key={currentImage.full}
                src={currentImage.full}
                className="gallery-img"
                alt={`Red Devils gallery ${activeIndex + 1}`}
                loading={activeIndex === 0 ? "eager" : "lazy"}
                fetchpriority={activeIndex === 0 ? "high" : "auto"}
                decoding="async"
              />
            </div>

            <button
              className="gallery-control gallery-control-next d-none d-md-flex"
              type="button"
              onClick={goToNext}
              aria-label="Show next slide"
            >
              <span className="gallery-control-icon gallery-control-icon-next" aria-hidden="true"></span>
            </button>
          </div>

          <div className="carousel-indicators position-static mt-3">
            {IMAGES.map((image, idx) => (
              <button
                key={image.full}
                type="button"
                onClick={() => goToSlide(idx)}
                className={idx === activeIndex ? "active" : ""}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === activeIndex ? "true" : undefined}
              ></button>
            ))}
          </div>

          <div className="thumb-indicators mt-3 d-none d-md-flex">
            {IMAGES.map((image, idx) => (
              <button
                key={image.thumb}
                type="button"
                onClick={() => goToSlide(idx)}
                className={idx === activeIndex ? "active" : ""}
                aria-label={`Show slide ${idx + 1}`}
                aria-current={idx === activeIndex ? "true" : undefined}
              >
                <img src={image.thumb} alt={`Thumbnail ${idx + 1}`} loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
