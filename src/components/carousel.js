import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const PlayerCarousel = ({ players }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setViewportWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <div className="embla">
      <div className="embla__viewport m-5" ref={emblaRef}>
        <div className="embla__container">
          {players.map((player, index) => (
            <div className="embla__slide" key={index}>
              <div className="card player-card m-2">
                <img
                  src={player.image}
                  className="card-img-top"
                  alt={`Player ${player.number}`}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">#{player.number}</h5>
                  <p className="card-text">
                    {player.bio.split('\n').map((line, idx) => (
                      <span key={idx}>{line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <p className="card-text"><strong>{player.stats}</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="embla__prev" onClick={() => emblaApi && emblaApi.scrollPrev()}>
      <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      <button className="embla__next" onClick={() => emblaApi && emblaApi.scrollNext()}>
      <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  );
};

export default PlayerCarousel;
