import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="about-us-container py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">About</h2>
            <p className="section-text">
              Welcome to the Red Devils! We are a dedicated group of athletes and coaches committed to excellence both on and off the court. Our mission is to develop top-notch players while fostering a positive and inclusive environment. Led by our experienced coaches, we strive for success through hard work, teamwork, and perseverance.
            </p>
            <p className="section-text">
              Program Director Antonio Scott, with years of experience and a passion for the game, plays a pivotal role in shaping the future of our players. Under his guidance, the Red Devils aim to reach new heights and continually improve.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <img className="img-fluid rounded-2" src="/images/CoachScott.jpg" alt="Coach Antonio Scott" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
