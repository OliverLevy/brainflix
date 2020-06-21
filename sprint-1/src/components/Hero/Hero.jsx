import React from 'react'
import './Hero.scss'

function Hero({mainData}) {
    return(
      <div className="hero"> 
        <video 
        className="hero__vid" 
        src={process.env.PUBLIC_URL + mainData.video} 
        poster={process.env.PUBLIC_URL + mainData.image} 
        alt="Hero img" 
        controls
        />
        <div className="controls">
          <div className="controls__play"></div>
          <div className="controls__progress"></div>
          <div className="controls__items">
            <div className="controls__full-screen"></div>
            <div className="controls__volume"></div>
          </div>
        </div>
      </div>
    )
}

export default Hero;