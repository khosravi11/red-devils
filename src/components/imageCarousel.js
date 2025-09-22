import React from 'react';

const ImageCarousel = () => {
  return (
    <section id="gallery" className="py-5" style={{ backgroundColor: '#000' }}>
      <div className="container">

        <div 
          id="brdCarousel" 
          className="carousel slide" 
          data-bs-ride="carousel" 
          data-bs-touch="true"
        >
          {/* Carousel Images */}
          <div className="carousel-inner rounded shadow-lg overflow-hidden">
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

          {/* Controls outside & larger */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#brdCarousel"
            data-bs-slide="prev"
            style={{ width: '5%', left: '-80px' }}
          >
            <span 
              className="carousel-control-prev-icon" 
              aria-hidden="true" 
              style={{ transform: 'scale(2)' }} // make arrow bigger
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#brdCarousel"
            data-bs-slide="next"
            style={{ width: '5%', right: '-80px' }}
          >
            <span 
              className="carousel-control-next-icon" 
              aria-hidden="true" 
              style={{ transform: 'scale(2)' }} // make arrow bigger
            ></span>
            <span className="visually-hidden">Next</span>
          </button>

          {/* Indicators moved below */}
          <div className="carousel-indicators position-static mt-3">
            {[...Array(7)].map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#brdCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  margin: '0 6px',
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
