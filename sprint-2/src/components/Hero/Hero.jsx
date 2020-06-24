import React from 'react'
import './Hero.scss'

function Hero({mainData}) {
    return(
      <div className="hero"> 
        <div className="hero__vid-container">
          <video 
          className="hero__vid" 
          src={process.env.PUBLIC_URL + mainData.video} 
          poster={process.env.PUBLIC_URL + mainData.image} 
          alt="Hero img" 
          />
          <div className="controls">
            <button className="controls__play">
            </button>
            <div className="controls__progress">
              <input 
              type="range"
              className="controls__progress-range"
              min="0"
              max="100"
              value="0"
              />
              <p className="controls__progress-duration">0:00/{mainData.duration}</p>
            </div>
            
            <div className="controls__items">
              <div className="controls__full-screen"></div>
              <div className="controls__volume"></div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hero;