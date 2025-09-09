import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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

    emailjs
      .send('service_mkubqr9', 'template_l178rz9', formData, 'ZRnaxOFhnzpDdbvbK')
      .then(() => {
        setSuccessMessage('Your message has been sent successfully! One of our representatives will contact you soon.');
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
    <section id="register" className="register-container text-white py-4">
      <div className="container">
        <h2 className="section-title">Register Today</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
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
                <button type="submit" className="btn btn-primary bg-black">Submit</button>
              </form>
            ) : (
              <div className="alert alert-success mt-3">{successMessage}</div>
            )}

            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
          </div>

          <div className="col-md-6 d-flex justify-content-end">
            <img src="/images/RedDevilsLogo.png" alt="Red Devils" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
