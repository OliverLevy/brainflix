import React from 'react'
import Hero from '../Hero/Hero'
import Description from '../Description/Description'
import Comments from '../Comments/Comments'
import SideVideo from '../SideVideo/SideVideo'
import './Main.scss'

function Main({sideData, submitHandler, mainData, comments}){
  return(
    <div>
      <Hero 
      mainData={mainData} 
      />

      <Description 
      mainData={mainData}
      />

      <Comments 
      submitHandler={submitHandler} 
      comments={comments} 
      />

      <SideVideo sideData={sideData} />
    </div>
  )
}


export default Main;