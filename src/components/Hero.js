import React from "react";

const HERO_BG_STYLE = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/RedDevilsHeroImage.jpg)`,
};

const Hero = () => {
  return (
    <section id="home">
      <div
        className="banner-image text-center text-white fst-italic d-flex flex-wrap align-items-center py-5"
        style={HERO_BG_STYLE}
      >
        <div className="w-100">
          {/* Main Title */}
          <h1 className="hero-title display-3 fw-bold animate__animated animate__fadeInDown">
            Berkeley RED DEVILS
          </h1>

          {/* Subtitle / Tagline */}
          <div className="hero-subtitle shadow-lg mt-3 animate__animated animate__fadeInUp">
            <p className="w-75 m-auto fs-4">
              Premier AAU basketball program for youth aged 9-14 across the East Bay
            </p>
          </div>

          {/* Registration Message */}
          <h2 className="mt-4 text-warning fw-bold animate__animated animate__fadeInUp">
            Spring/Summer 2026 Registration is Open
          </h2>
          <p className="lead">Secure your spot today</p>

          {/* Call to Action */}
          <div className="d-flex flex-column align-items-center gap-3 mt-4">
            <a
              className="btn btn-danger btn-lg fs-3 px-5 py-3 text-decoration-none fw-bold shadow"
              href="#about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
