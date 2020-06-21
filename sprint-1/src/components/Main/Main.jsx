import React from 'react'
import Hero from '../Hero/Hero'
import Description from '../Description/Description'
import Comments from '../Comments/Comments'
import SideVideo from '../SideVideo/SideVideo'
import './Main.scss'

function Main({sideData, submitHandler, mainData, comments}){
  return(
    <div className="main">
      <Hero 
      mainData={mainData} 
      />

      <div className="content">
        <div className="content__main">
          <Description 
          mainData={mainData}
          />

          <Comments 
          submitHandler={submitHandler} 
          comments={comments} 
          />
        </div>

        <div className="content__aside">
          <SideVideo sideData={sideData} />
          </div>
      </div>
    </div>
  )
}


export default Main;