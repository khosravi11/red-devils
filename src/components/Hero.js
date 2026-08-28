import React, { useEffect, useRef, useState } from "react";

const ANNOUNCEMENTS = [
  {
    eyebrow: "2026–27 Season",
    title: "Join the Team",
    date: "Developmental Teams • 9U–14U",
    location: "2 Practices Weekly • 2 Tournaments Monthly",
    description:
      "Build skills, basketball IQ, and confidence through team play and competition. Check out a practice, meet the coaches and team, and see if BRD is the right fit.",
    primaryCtaLabel: "Call Coach Scott",
    primaryCtaHref: "tel:+15103658568",
    ctaLabel: "View Join the Team Flyer",
    flyer: "/images/hero/join-the-team-2026-27.jpg",
    flyerHref: "/pdf/berkeley-red-devils-join-the-team-2026-27.pdf",
    alt: "Berkeley Red Devils 2026–27 Join the Team flyer for developmental teams 9U through 14U",
  },
];

const AUTOPLAY_DELAY_MS = 6500;
const SWIPE_THRESHOLD_PX = 45;

const wrapIndex = (index) =>
  (index + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length;

const Hero = () => {
  const carouselRef = useRef(null);
  const touchStartXRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAutoplayStopped, setIsAutoplayStopped] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" && typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event) => setPrefersReducedMotion(event.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (
      ANNOUNCEMENTS.length < 2 ||
      isPaused ||
      isAutoplayStopped ||
      prefersReducedMotion
    ) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1));
    }, AUTOPLAY_DELAY_MS);

    return () => window.clearInterval(intervalId);
  }, [isPaused, isAutoplayStopped, prefersReducedMotion]);

  const goToPrevious = () => {
    setActiveIndex((current) => wrapIndex(current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => wrapIndex(current + 1));
  };

  const handleKeyDown = (event) => {
    if (ANNOUNCEMENTS.length < 2) {
      return;
    }

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

    if (
      ANNOUNCEMENTS.length < 2 ||
      startX === null ||
      endX === null
    ) {
      return;
    }

    const distance = endX - startX;
    if (Math.abs(distance) < SWIPE_THRESHOLD_PX) {
      return;
    }

    if (distance > 0) {
      goToPrevious();
      return;
    }

    goToNext();
  };

  const handleBlurCapture = (event) => {
    if (carouselRef.current?.contains(event.relatedTarget)) {
      return;
    }

    setIsPaused(false);
  };

  const announcement = ANNOUNCEMENTS[activeIndex];

  return (
    <section id="home" className="hero-announcements">
      <h1 className="visually-hidden">Berkeley Red Devils</h1>

      <div
        ref={carouselRef}
        className="hero-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Berkeley Red Devils announcements"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={handleBlurCapture}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="visually-hidden"
          aria-live={
            isPaused || isAutoplayStopped || prefersReducedMotion
              ? "polite"
              : "off"
          }
          aria-atomic="true"
        >
          {`${announcement.title}. Slide ${activeIndex + 1} of ${ANNOUNCEMENTS.length}.`}
        </div>

        <article
          key={announcement.flyer}
          className="hero-slide"
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeIndex + 1} of ${ANNOUNCEMENTS.length}`}
        >
          <div
            className="hero-slide-backdrop"
            style={{ backgroundImage: `url(${announcement.flyer})` }}
            aria-hidden="true"
          />

          <div className="hero-slide-inner">
            <div className="hero-slide-copy">
              <p className="hero-eyebrow">{announcement.eyebrow}</p>
              <h2 className="hero-heading">{announcement.title}</h2>

              <div className="hero-event-details">
                <p>{announcement.date}</p>
                <p>{announcement.location}</p>
              </div>

              <p className="hero-description">{announcement.description}</p>

              <div className="hero-actions">
                <a className="hero-cta" href={announcement.primaryCtaHref}>
                  {announcement.primaryCtaLabel}
                </a>
                <a
                  className="hero-cta hero-cta-secondary"
                  href={announcement.flyerHref ?? announcement.flyer}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${announcement.ctaLabel} (opens in a new tab)`}
                >
                  {announcement.ctaLabel}
                  <svg
                    className="hero-external-link-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M14 5h5v5M19 5l-9 9M18 13v6H5V6h6" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="hero-flyer-frame">
              <img
                src={announcement.flyer}
                className="hero-flyer-image"
                alt={announcement.alt}
                loading={activeIndex === 0 ? "eager" : "lazy"}
                fetchpriority={activeIndex === 0 ? "high" : "auto"}
                decoding="async"
              />
            </div>
          </div>
        </article>

        {ANNOUNCEMENTS.length > 1 && (
          <div className="hero-carousel-nav" aria-label="Announcement controls">
          <button
            className="hero-carousel-arrow"
            type="button"
            onClick={goToPrevious}
            aria-label="Show previous announcement"
          >
            <svg
              className="hero-arrow-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="hero-carousel-dots">
            {ANNOUNCEMENTS.map((item, index) => (
              <button
                key={item.flyer}
                type="button"
                className={`hero-carousel-dot${
                  index === activeIndex ? " active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${item.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <button
            className="hero-carousel-arrow"
            type="button"
            onClick={goToNext}
            aria-label="Show next announcement"
          >
            <svg
              className="hero-arrow-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {!prefersReducedMotion && (
            <button
              className="hero-carousel-arrow"
              type="button"
              onClick={() => setIsAutoplayStopped((current) => !current)}
              aria-label={
                isAutoplayStopped
                  ? "Resume automatic announcements"
                  : "Pause automatic announcements"
              }
            >
              <svg
                className="hero-arrow-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                {isAutoplayStopped ? (
                  <path d="m9 7 8 5-8 5Z" />
                ) : (
                  <path d="M9 7v10M15 7v10" />
                )}
              </svg>
            </button>
          )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
