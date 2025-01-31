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

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.oncanplay = () => {
        videoRef.current.play();
      };
    }
  };


  return (
    <section className="bg-black">
    <div className="container py-4 bg">      
      <h2 className='section-title text-white'>Videos</h2>
      <div className="row">
        {/* Video Player */}
        <div className="col-lg-8 mb-4">
          <video
            ref={videoRef}
            className="w-100 rounded shadow"
            style={{ height: "360px", backgroundColor: "black", border: "#B80808 solid 6 px"}}
            controls
          >
            <source src={currentVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Playlist */}
        <div className="col-lg-4 d-flex flex-column">
          <h5 className="mb-2 fw-bold section-header text-white">Playlist</h5>
          <div className="list-group overflow-auto rounded shadow flex-grow-1 mb-4" style={{ maxHeight: "400px" }}>
            {videos.map((video, index) => (
              <button
                key={index}
                className={`list-group-item list-group-item-action d-flex align-items-start justify-content-between ${currentVideo.src === video.src ? "active" : ""
                  }`}
                onClick={() => handleVideoSelect(video)}
                style={{
                  cursor: "pointer",
                  borderLeft: "4px solid transparent",
                  flex: 1, // Makes each button fill equal space
                  height: "auto", // Allows buttons to stretch equally
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderLeft = "4px solid #6bbfa4")}
                onMouseOut={(e) => (e.currentTarget.style.borderLeft = "4px solid transparent")}
              >
                <div>
                  <h6 className="mb-1 fw-bold text-dark">{video.name}</h6>
                </div>
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
