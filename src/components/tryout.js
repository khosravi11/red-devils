 // TryoutBanner.jsx
import React from "react";

const TryoutBanner = () => {
  return (
    <section
      id="tryouts"
      className="bg-dark text-white text-center d-flex flex-column align-items-center justify-content-center py-5"
      style={{ backgroundImage: "url('/assets/images/tryout-bg.jpg')", backgroundSize: 'cover' }}
    >
      <div className="container">
        <h2 className="display-4 mb-3">2025 Tryouts – August 23rd</h2>
        <p className="lead mb-4">
          Ready to join the Berkeley Red Devils? Come show us what you’ve got!
        </p>
        <a
          href="/pdf/Tryouts2025.pdf"
          className="btn btn-outline-light btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Tryout Flyer
        </a>
      </div>
    </section>
  );
};

export default TryoutBanner;
