import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-0 position-static bg-red pb-2 pb-lg-2">
      <div className="container flex-column flex-lg-row align-content-center">
      <a className="navbar-brand m-0 p-0" href="#home">
          <img src="/images/red-devils-logo.png" alt="Red Devils Logo" className="d-inline-block align-top logo py-2" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav py-2 mx-auto flex-column flex-lg-row fs-2">
            <li className="nav-item text-center">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" href="#team">Our Team</a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" href="#register">Register</a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" href="#footer">Contact</a>
            </li>
          </ul>
        </div>
        <div className="d-flex ms-lg-auto mt-3 mt-lg-0 fs-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="nav-link text-light px-2">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="nav-link text-light px-2">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
      </div>
    </nav>
  );
};

export default NavBar;
