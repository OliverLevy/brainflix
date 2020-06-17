import React from 'react'
import HeroImg from '../assets/Images/video-list-0.jpg'
import PlayBtn from '../assets/Icons/SVG/Icon-play.svg'
import '../styles/Hero.scss'

function Hero(){
  return(
    <div className="hero">
      <img src={HeroImg} alt="Hero img" className="hero__img"/>
      <div className="hero__controls">
        <img src={PlayBtn} alt="Play button"/>
      </div>
    </div>
  )
}

export default Hero;