import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-red p-0 pb-2 position-relative">
      <div className="container flex-column flex-lg-row align-items-center">
        <a className="navbar-brand m-0 p-0" href="#home">
          <img
            src="/images/RedDevilsLogo.png"
            alt="Red Devils Logo"
            className="d-inline-block align-top logo py-2"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav py-2 mx-auto flex-column flex-lg-row fs-2 text-center">
            {[
              { href: "#home", label: "Home" },
              { href: "#affiliates", label: "Affiliates" },
              { href: "#videos", label: "Videos" },
              { href: "#coaches", label: "Staff" },
              { href: "#about", label: "About" },
              { href: "#register", label: "Register" },
              { href: "#footer", label: "Contact" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex ms-lg-auto mt-3 mt-lg-0 fs-4">
          <a
            href="https://www.facebook.com/p/Berkeley-Red-Devils-AAU-Team-100057474915829/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-light px-2"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/berkeleyreddevilsbasketball/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-light px-2"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
