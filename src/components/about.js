import React from 'react';

const AboutUs = () => {
  return (
    <div id="about" className='about-us-container py-4'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">About</h2>
            <p className="section-text">
              Welcome to the Red Devils! We are a dedicated group of athletes and coaches committed to excellence both on and off the court. Our mission is to develop top-notch players while fostering a positive and inclusive environment. Led by our experienced coaches, we strive to achieve great success through hard work, teamwork, and perseverance.
            </p>
            <p className="section-text">
              Program Director, Antonio Scott, with years of experience and a passion for the game, plays a pivotal role in shaping the future of our players. Under his guidance, the Red Devils aim to reach new heights and continually improve.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <img className='img-fluid rounded-2' src='/images/coach-scott.jpg' alt=''/>
            {/* <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://placehold.co/500x500?text=1" alt="Coach" className="coach-image img-fluid" />
                </div>
                <div class="carousel-item">
                  <img src="https://placehold.co/500x500?text=2" alt="Coach" className="coach-image img-fluid" />
                </div>
                <div class="carousel-item">
                  <img src="https://placehold.co/500x500?text=3" alt="Coach" className="coach-image img-fluid" />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;