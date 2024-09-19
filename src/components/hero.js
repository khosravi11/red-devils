import React from 'react';

const Hero = () => {
  return (
    <div className="banner-image text-center text-white fst-italic d-flex flex-wrap align-items-center py-4">
      <div className='w-100'>
        <h1 className="hero-title w-100">Berkeley RED DEVILS</h1>
        <p className="hero-subtitle w-100">LOOK UP, GET UP & NEVER GIVE UP</p>
        <div className='w-100'>
          <a className="btn btn-primary btn-lg mt-4 fs-2 px-4" href="#register">Join The Red Devils</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
