import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const CallCoachButton = () => {
  return (
    <div>
    <a
      href="tel:510-365-8568"
      className="call-coach-btn btn text-white btn-lg text-decoration-none"
    >
      <FontAwesomeIcon icon={faPhone} className="me-2" />
      Call Coach Scott
    </a>
    </div>
  );
};

export default CallCoachButton;
