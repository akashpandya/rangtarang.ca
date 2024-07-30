import React from 'react';
import './Karaoke2024.css';

const Karaoke2024 = () => {
  const videoFiles = Array.from({ length: 29 }, (_, index) => `videos/karaoke_v_${String(index + 1).padStart(2, '0')}.mp4`);

  return (
    <div className="karaoke-page">
      <h1>Karaoke Night 2024</h1>
      <p>
        Join us for a memorable night of karaoke, featuring classic Bollywood hits and popular new songs. The event promises a night filled with music, laughter, and community spirit.
      </p>
      <div className="videos-container">
        {videoFiles.map((videoSrc, index) => (
          <div className="video-wrapper" key={index}>
            <video
              src={videoSrc}
              className="karaoke-video"
              onMouseEnter={e => {
                setTimeout(() => {
                  e.target.play();
                }, 1000);
              }}
              onMouseLeave={e => {
                e.target.pause();
                e.target.currentTime = 0;
              }}
              loop
              muted
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Karaoke2024;
