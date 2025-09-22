import React, { useEffect } from "react";

const IMAGES = Array.from({ length: 7 }, (_, i) => `/images/brdCarousel${i + 1}.webp`);

const ImageCarousel = () => {
  useEffect(() => {
    const carousel = document.getElementById("brdCarousel");

    const handleSlide = (e) => {
      const index = e.to; // Bootstrap gives the index of the new active slide

      // Remove active from all thumbnails
      document
        .querySelectorAll(".thumb-indicators button")
        .forEach((btn) => btn.classList.remove("active"));

      // Add active to the matching thumbnail
      const activeThumb = document.querySelector(
        `.thumb-indicators button[data-bs-slide-to="${index}"]`
      );
      if (activeThumb) {
        activeThumb.classList.add("active");
      }
    };

    carousel.addEventListener("slid.bs.carousel", handleSlide);

    return () => {
      carousel.removeEventListener("slid.bs.carousel", handleSlide);
    };
  }, []);

  return (
    <section id="gallery" className="bg-black py-5 text-center">
      <div className="container">
        <div
          id="brdCarousel"
          className="carousel slide carousel-fade mx-auto"
          data-bs-ride="carousel"
          data-bs-interval="4500"
          data-bs-touch="true"
          data-bs-wrap="true"
          style={{ maxWidth: "900px" }}
        >
          {/* Slides */}
          <div className="carousel-inner rounded-3 shadow-lg">
            {IMAGES.map((src, idx) => (
              <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                <img
                  src={src}
                  className="d-block w-100 gallery-img"
                  alt={`Red Devils gallery ${idx + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Controls (desktop only) */}
          <button
            className="carousel-control-prev d-none d-md-flex"
            type="button"
            data-bs-target="#brdCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next d-none d-md-flex"
            type="button"
            data-bs-target="#brdCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

          {/* Indicators (dots) */}
          <div className="carousel-indicators position-static mt-3">
            {IMAGES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#brdCarousel"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          {/* Thumbnails (desktop only) */}
          <div className="thumb-indicators mt-3 d-none d-md-flex">
            {IMAGES.map((src, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#brdCarousel"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
              >
                <img src={src} alt={`Thumbnail ${idx + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
