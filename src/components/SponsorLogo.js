import React from "react";

const SponsorLogo = ({ sponsor, eager = false }) => {
  const mark = (
    <span className={`sponsor-mark sponsor-mark--${sponsor.id}`}>
      <img
        src={sponsor.logo}
        alt={`${sponsor.name} logo`}
        className="sponsor-logo"
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </span>
  );

  return sponsor.url ? (
    <a
      className="sponsor-link"
      href={sponsor.url}
      target="_blank"
      rel="sponsored noopener noreferrer"
      aria-label={`${sponsor.name} (opens in a new tab)`}
    >
      {mark}
    </a>
  ) : (
    mark
  );
};

export default SponsorLogo;
