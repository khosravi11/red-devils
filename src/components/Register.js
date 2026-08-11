import React from "react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc5SJP03FuVh54ofFRGLPZTI5LPOYXBs8RhxRs-RUV8p6Sjvg/viewform";

const Register = () => {
  return (
    <section
      id="register"
      className="register-container text-white py-5 bg-dark reveal"
    >
      <div className="container">
        <div className="register-heading text-center mx-auto">
          <p className="register-eyebrow">2026–27 Season</p>
          <h2 className="section-title mb-3">Register for Team Tryouts</h2>
          <p className="mb-3">
            Complete the form below to register for Berkeley Red Devils team
            tryouts. The tryout fee is $25.
          </p>
          <p className="register-help mb-4">
            Questions? Call Coach Scott at{" "}
            <a href="tel:+15103658568">(510) 365-8568</a>.
          </p>
        </div>

        <div className="registration-form-frame">
          <iframe
            src={`${FORM_URL}?embedded=true`}
            title="Berkeley Red Devils team tryout registration form"
            width="100%"
            height="3215"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>

        <p className="registration-form-fallback text-center mt-3 mb-0">
          Trouble viewing the form?{" "}
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
            Open it in a new tab
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Register;
