import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Call = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the device is mobile
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Change based on your mobile breakpoint
  };

  useEffect(() => {
    checkIfMobile(); // Run on initial load

    // Add a resize event listener to detect screen changes
    window.addEventListener('resize', checkIfMobile);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <>
      {isMobile ? (
        // On mobile, it's a call button
        <a href="tel:+15103658568" className="hovering-phone-button">
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </a>
      ) : (
        // On desktop, it's a link to the register form section
        <a href="#register" className="hovering-phone-button">
          <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="2x" />
        </a>
      )}
    </>
  );
};

export default Call;
