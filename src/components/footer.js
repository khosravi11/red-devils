import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 text-center">
            <h5  className="section-title">Contact Us</h5>
            <ul className="list-unstyled">
              <li className='fs-3'><strong>Phone:</strong> <a href='tel:+15103658568'>(510) 365-8568</a></li>
            </ul>
          </div>          
          <div className="col-md-4 mb-3 text-center">
            <h5  className="section-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#team" className="text-white">Our Team</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#register" className="text-white">Register</a></li>
              <li><a href="#footer" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 text-center">
            <h5  className="section-title">Follow Us</h5>
            <div className="social-media-icons">
              <a href="https://www.facebook.com/p/Berkeley-Red-Devils-AAU-Team-100057474915829/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="https://www.instagram.com/berkeleyreddevilsbasketball/?hl=en" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} Red Devils Berkeley, CA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
