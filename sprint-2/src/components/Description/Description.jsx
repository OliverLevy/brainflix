import React from 'react'
import ViewsIcon from '../../assets/Icons/SVG/Icon-views.svg'
import LikesIcon from '../../assets/Icons/SVG/Icon-likes.svg'

import './Description.scss'


function Description({mainData}){
  return(
    <div className="desc">
          <h1 className="desc__title">{mainData.title}</h1>
          
          <div className="desc__items">
            <div className="desc__channel-container">
              <h3 className="desc__channel">By {mainData.channel}</h3>
              <h4 className="date">{mainData.timestamp}</h4>
            </div>

            <div className="desc__stats">
              <img 
              className="desc__views-icon" 
              src={ViewsIcon} 
              alt="views-icon"/>
              <p>{mainData.views}</p>
              <img 
              className="desc__likes-icon" 
              src={LikesIcon} 
              alt="likes-icon"/>
              <p>{mainData.likes}</p>
            </div>
          </div>

          <div className="divider"></div>

          <p className="desc__text">{mainData.description}</p>
    </div>
  )
}


export default Description;