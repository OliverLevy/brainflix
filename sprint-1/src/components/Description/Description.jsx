import React from 'react'

import './Description.scss'


function Description({mainData}){
  return(
    <div>
          <h1>hi!</h1>
          <h1>{mainData.title}</h1>
          <h3>By {mainData.channel}</h3>
          <p>{mainData.timestamp}</p>
          <p>{mainData.views}</p>
          <p>{mainData.likes}</p>
          <p>{mainData.description}</p>
    </div>
  )
}


export default Description;