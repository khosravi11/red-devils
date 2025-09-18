import React from "react";

const TryoutBanner = () => {
  return (
    <section
      id="registration"
      className="position-relative text-white text-center d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: "url('/assets/images/registration-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
      }}
    >
      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h2 className="h2 fw-bold mb-2">Fall 2025 Registration Still Open</h2>
        <p className="mb-3">Contact us today to sign up and secure your spot</p>
        <a
          href="#register"
          className="btn btn-lg fw-bold text-white"
          style={{
            backgroundColor: "#c00", // red
            border: "none",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#a00";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#c00";
          }}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default TryoutBanner;
