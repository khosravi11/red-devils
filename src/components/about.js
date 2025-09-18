import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="about-us-container py-5 bg-light">
      <div className="container">
        
        <h2 className="section-title text-center mb-4">About the Red Devils</h2>
        <div className="row align-items-center g-5">
          {/* Image Section */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="position-relative">
              <img
                className="img-fluid rounded-3 shadow-lg"
                src="/images/CoachScott.jpg"
                alt="Coach Antonio Scott"
                style={{ maxHeight: "450px", objectFit: "cover" }}
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 text-center text-white py-2"
                style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
              >
                <small>Coach Antonio Scott — Program Director</small>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <p className="section-text fs-5">
              The <strong>Berkeley Red Devils</strong> are more than just a basketball team — we are 
              a <strong>youth development program</strong> dedicated to teaching fundamentals, 
              building confidence, and fostering leadership for players ages 9–14.
            </p>
            <div className="bg-secondary rounded-3 shadow-sm p-3 mt-3">
              <h3 className="fw-bold text-white">What Families Can Expect</h3>
              <ul className="section-text text-white list-unstyled mt-2">
                <li>🏀 Weekly practices focused on fundamentals & teamwork</li>
                <li>🎯 Competitive weekend games & tournaments</li>
                <li>💪 Training that builds athleticism & confidence</li>
                <li>🤝 A supportive culture for both players & parents</li>
              </ul>
            </div>
            <p className="section-text fs-5 mt-3">
              With <strong>Coach Antonio Scott’s</strong> leadership and years of experience, 
              parents can feel confident knowing their players are receiving top-tier coaching 
              in a safe and inspiring environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
