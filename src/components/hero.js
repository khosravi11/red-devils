import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="banner-image text-center text-white fst-italic d-flex flex-wrap align-items-center py-4">
        <div className="w-100">
          <h1 className="hero-title">Berkeley RED DEVILS</h1>
          <div className="hero-subtitle shadow shadow-lg">
            <p className="w-75 m-auto">
            Premier AAU basketball program for youth aged 9-14 across the East Bay!
            </p>
          </div>
          <div className="d-flex flex-column align-items-center gap-3 mt-4">
            <a
              className="btn btn-primary btn-lg fs-2 px-4 text-decoration-none"
              href="#register"
            >Join The Red Devils
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
