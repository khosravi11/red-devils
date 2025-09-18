import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="banner-image text-center text-white fst-italic d-flex flex-wrap align-items-center py-5" 
        style={{ backgroundColor: "#000", minHeight: "60vh" }}
      >
        <div className="w-100">
          {/* Main Title */}
          <h1 className="hero-title display-3 fw-bold">Berkeley RED DEVILS</h1>

          {/* Subtitle / Tagline */}
          <div className="hero-subtitle shadow-lg mt-3">
            <p className="w-75 m-auto fs-4">
              Premier AAU basketball program for youth aged 9-14 across the East Bay
            </p>
          </div>

          {/* Registration Message */}
          <h2 className="mt-4 text-warning fw-bold">
            Fall 2025 Registration Still Open
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
