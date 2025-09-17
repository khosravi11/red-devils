import React from "react";

const Affiliates = () => (
  <section id="affiliates" className="py-5 bg-white">
    <div className="container text-center">
      <h2 className="section-title fw-bold mb-4">Partners</h2>
      <div className="row justify-content-center align-items-center">
        {["RedDevilsLogo.png", "EvolveLogo.png", "AdidasLogo.png"].map((logo, index) => (
          <div key={index} className="col-6 col-md-4 d-flex justify-content-center">
            <img
              src={`/images/${logo}`}
              className="img-fluid rounded affiliate-logo"
              alt={`${logo.split(".")[0]} Logo`}
              style={{ maxWidth: "180px", transition: "0.3s ease-in-out" }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Affiliates;
