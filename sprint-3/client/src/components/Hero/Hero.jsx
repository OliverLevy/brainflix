import React from "react";
import "./Hero.scss";

function Hero({ mainVid }) {
  return (
    <div className="hero">
      <div className="hero__vid-container">
        <video
          className="hero__vid"
          src={
            process.env.PUBLIC_URL +
            mainVid.video +
            "?api_key=2198d2ef-b132-4f64-accc-f82f4168c9a8"
          }
          poster={process.env.PUBLIC_URL + mainVid.image}
          alt="Hero img"
          // controls
        />
        <div className="controls">
          <button className="controls__play"></button>
          <div className="controls__progress">
            <progress
              type="range"
              className="controls__progress-range"
              min="0"
              max="100"
              value="0"
            />
            <p className="controls__progress-duration">
              0:00/{mainVid.duration}
            </p>
          </div>

          <div className="controls__items">
            <div className="controls__full-screen"></div>
            <div className="controls__volume"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
