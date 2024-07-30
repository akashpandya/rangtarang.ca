import React, { useRef, useEffect } from "react";
import "./Karaoke2024.css";

function Karaoke2024() {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      video.onmouseenter = () => {
        setTimeout(() => {
          video.play();
          video.classList.add("playing");
        }, 1000); // 1 second delay
      };

      video.onmouseleave = () => {
        video.pause();
        video.currentTime = 0;
        video.classList.remove("playing");
      };
    });
  }, []);

  const videos = Array.from({ length: 29 }, (_, index) => `videos/karaoke_v_${String(index + 1).padStart(2, "0")}.mp4`);

  return (
    <div className="karaoke-page">
      <h1 className="title">Karaoke Night 2024</h1>
      <p className="description">
        The community came together for a memorable karaoke night, singing both classic Bollywood hits and popular new songs. The atmosphere was electric as everyone, young and old, took turns at the microphone, showcasing their vocal talents. The event was a resounding success, filled with laughter, music, and a shared love for singing. It was a night of unity and joy, where the community bonded over the timeless magic of music.
      </p>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-container">
            <video
              src={video}
              className="video"
              muted
              ref={(el) => (videoRefs.current[index] = el)}
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Karaoke2024;
