import React from "react";

const FEATURED_VIDEO_URL = "https://www.ktvu.com/video/fmc-xyv8pvsqro76idn9";
const FEATURED_VIDEO_IMAGE = "/images/ktvu-screenshot.png";

const FeaturedVideo = () => {
  return (
    <section id="featured-video" className="featured-video-section py-5 reveal">
      <div className="container">
        <div className="featured-video-card row g-4 align-items-center">
          <div className="col-lg-6">
            <a
              href={FEATURED_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-video-link d-block"
              aria-label="Open the Red Devils KTVU feature"
            >
              <div className="featured-video-frame shadow-lg">
                <img
                  src={FEATURED_VIDEO_IMAGE}
                  alt="Screenshot from the Red Devils KTVU feature"
                  className="featured-video-image"
                />
              </div>
            </a>
          </div>

          <div className="col-lg-6 text-white">
            <p className="featured-video-eyebrow mb-2">Featured Media</p>
            <h2 className="section-title mb-3">Red Devils on KTVU</h2>
            <p className="featured-video-copy mb-3">
              Watch the Berkeley Red Devils featured on KTVU&apos;s <strong>Like It Or Not</strong>.
            </p>
            <p className="featured-video-meta mb-4">
              Posted March 31, 2026 on KTVU FOX 2.
            </p>
            <a
              className="btn btn-danger btn-lg px-4 py-3 fw-bold shadow"
              href={FEATURED_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideo;
