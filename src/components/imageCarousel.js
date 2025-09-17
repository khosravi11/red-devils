import React from 'react';

const ImageCarousel = () => {
  return (
    <section id="gallery" className="py-5" style={{ backgroundColor: '#000' }}>
      <div className="container">

        <div id="brdCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <div className="carousel-indicators">
            {[...Array(7)].map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#brdCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel Images */}
          <div className="carousel-inner rounded shadow-lg">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <img
                  src={`/images/brdCarousel${index + 1}.webp`}
                  className="d-block w-100"
                  alt={``}
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#brdCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#brdCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
