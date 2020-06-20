import React from 'react'
import './Hero.scss'
import MainData from '../../JSON/main-video-data.json'
import SideData from '../../JSON/side-video-data.json'

function Hero({mainData}) {
    return(
      <div className="hero"> 
        <video 
        className="hero__img" 
        src={process.env.PUBLIC_URL + mainData.video} 
        poster={process.env.PUBLIC_URL + mainData.image} 
        alt="Hero img" 
        controls
        />
      </div>
    )
}

export default Hero;