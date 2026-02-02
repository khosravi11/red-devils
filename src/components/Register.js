import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMessage('Email service is not configured. Please try again later.');
      setSuccessMessage('');
      return;
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setSuccessMessage(
          'Thank you for reaching out! Your message has been sent successfully. One of our representatives will contact you soon.'
        );
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(true);
      })
      .catch(() => {
        setErrorMessage('Oops! Something went wrong. Please try again later.');
        setSuccessMessage('');
      });
  };

  return (
    <section id="register" className="register-container text-white py-5 bg-dark reveal">
      <div className="container">
        <h2 className="section-title text-center mb-4">Contact Us</h2>
        <p className="text-center mb-5">
          Have questions or want to learn more about our program? Call Coach Scott at <a  href="tel:510-365-8568">510-365-8568 </a> or complete the form below and one of our team members will get back to you.
        </p>

        <div className="row align-items-start">
          {/* Contact Form */}
          <div className="col-md-6">
            <div className="card bg-secondary text-white p-4 shadow-lg rounded-3">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-light w-100 fw-bold">
                    Submit
                  </button>
                </form>
              ) : (
                <div className="alert alert-success mt-3">{successMessage}</div>
              )}

              {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            </div>
          </div>

          {/* Logo / Branding */}
          <div className="col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0">
            <div className="text-center">
              <img
                src="/images/RedDevilsLogo.png"
                alt="Red Devils"
                className="img-fluid mb-3"
                style={{ maxWidth: '250px' }}
              />
              <h4 className="fw-bold">Red Devils Athletics</h4>
              <p className="mb-1">Building Champions On and Off the Court</p>
              <a href="tel:+15103658568" className="btn btn-outline-light mt-3">
                Call Coach Scott
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
