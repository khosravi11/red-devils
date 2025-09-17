 // TryoutBanner.jsx
import React from "react";

const TryoutBanner = () => {
  return (
    <section
      id="registration"
      className="bg-dark text-white text-center d-flex flex-column align-items-center justify-content-center py-5"
      style={{ backgroundImage: "url('/assets/images/registration-bg.jpg')", backgroundSize: 'cover' }}
    >
      <div className="container">
        <h2 className="display-4 mb-3">Fall 2025 Registration Still Open</h2>
        <p className="lead mb-4">
          Contact us today to sign up and secure your spot
        </p>
        <a
          href="#register"
          className="btn btn-outline-light btn-lg"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default TryoutBanner;
