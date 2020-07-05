import React from 'react'
import ViewsIcon from '../../assets/Icons/SVG/Icon-views.svg'
import LikesIcon from '../../assets/Icons/SVG/Icon-likes.svg'

import './Description.scss'


function Description({mainVid, dynaDate}){
  return(
    <div className="desc">
          <h1 className="desc__title">{mainVid.title}</h1>
          
          <div className="desc__items">
            <div className="desc__channel-container">
              <h3 className="desc__channel">By {mainVid.channel}</h3>
              <h4 className="date">{dynaDate(mainVid.timestamp)}</h4>
            </div>

            <div className="desc__stats">
              <div>
                <img 
                className="desc__views-icon" 
                src={ViewsIcon} 
                alt="views-icon"/>
                <p>{mainVid.views}</p>
              </div>
              <div>
                <img 
                className="desc__likes-icon" 
                src={LikesIcon} 
                alt="likes-icon"/>
                <p>{mainVid.likes}</p>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <p className="desc__text">{mainVid.description}</p>
    </div>
  )
}


export default Description;