import React from 'react'
import './Hero.scss'
import MainData from '../../JSON/main-video-data.json'
import SideData from '../../JSON/side-video-data.json'

class Hero extends React.Component {
  state = {MainData, SideData}



  // console.log("hi")
  // let data = {MainData}
  // console.log(data.MainData[0].description)


  
  render() {
    return(
      <div className="hero">
        <video className="hero__img" src={process.env.PUBLIC_URL + this.state.MainData[0].video} poster={process.env.PUBLIC_URL + this.state.MainData[0].image} alt="Hero img" controls/>
        
        <div className="hero__controls">
          {/* <img src={PlayBtn} alt="Play button"/> */}
        </div>

        <div>
          <h1>{this.state.MainData[0].title}</h1>
          <h3>By {this.state.MainData[0].channel}</h3>
          <p>{this.state.MainData[0].timestamp}</p>
          <p>{this.state.MainData[0].views}</p>
          <p>{this.state.MainData[0].likes}</p>
          <p>{this.state.MainData[0].description}</p>
        </div>
        
        <form>
          <input type="text"/>
          <button>COMMENT</button>
        </form>

        <div>
          {this.state.MainData[0].comments.map(comment => {
            return (
              <div key={comment.id}>
                <h3>{comment.name}</h3>
                <p>{comment.timestamp}</p>
                <p>{comment.comment}</p>
              </div>
            )
          })}
        </div>

        {/* <div>
          {this.state.SideData[0]}
        </div> */}
      </div>
    )
  }
}

export default Hero;