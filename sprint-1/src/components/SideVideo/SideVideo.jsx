import React from 'react'
import SideData from '../../JSON/side-video-data.json'
import './SideVideo.scss'

function SideVideo({sideData}){
    return (
      <ul>
        {sideData.map(item =>{
          return (
            <li key={item.id}>
              <img src={process.env.PUBLIC_URL + item.image} alt="" className="testing"/>
              <h3>{item.title}</h3>
              <p>{item.channel}</p>
            </li>
            )
        })}
      </ul>
    )
}

export default SideVideo