import React, { useState, useRef } from "react";

const VideoPlaylist = () => {
  const videoRef = useRef(null);
  const [videos] = useState([
    { name: "BRD Team Video", src: "/videos/BRDTeamVideo.mp4" },
    { name: "BRD Interview", src: "/videos/Brdinterview4.mp4" },
    { name: "Coach Scooter Interview", src: "/videos/CoachScooterInterview.mp4" },
    { name: "Jordan Price Interview", src: "/videos/JordanPriceInterview.mp4" },
    { name: "Yazier Lewis Interview", src: "/videos/YazierLewisInterview.mp4" },
  ]);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleVideoSelect = (video) => {
    if (currentVideo.src !== video.src) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentVideo(video);
        if (videoRef.current) {
          videoRef.current.load();
          videoRef.current.oncanplay = () => {
            setIsLoading(false);
            videoRef.current.play();
          };
        }
      }, 400);
    }
  };

  return (
    <section id="videos" className="bg-black py-5 reveal">
      <div className="container">
        <h2 className="text-center section-title text-white mb-4">Videos</h2>
        <div className="row justify-content-center align-items-center">
          {/* Video Player */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="border border-secondary rounded shadow-lg bg-dark position-relative"
              style={{ width: "100%", maxWidth: "600px", height: "500px", overflow: "hidden" }}
            >
              {isLoading && (
                <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-black opacity-75">
                  <div className="spinner-border text-light" role="status"></div>
                </div>
              )}
              <video
                ref={videoRef}
                className="rounded w-100 h-100"
                style={{ objectFit: "contain" }}
                controls
              >
                <source src={currentVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Playlist */}
          <div className="col-lg-5 mt-4 mt-lg-0">
            <h5 className="text-white fw-bold mb-3 text-center">Playlist</h5>
            <div
              className="list-group rounded shadow-lg overflow-auto mx-auto"
              style={{ maxHeight: "500px", width: "100%", maxWidth: "450px" }}
            >
              {videos.map((video) => (
                <button
                  key={video.src}
                  className={`list-group-item list-group-item-action d-flex align-items-center px-4 py-3 ${
                    currentVideo.src === video.src ? "active bg-secondary text-white" : "text-dark"
                  }`}
                  onClick={() => handleVideoSelect(video)}
                  style={{ cursor: "pointer", transition: "0.3s", fontSize: "1.1rem" }}
                >
                  Video: {video.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlaylist;
