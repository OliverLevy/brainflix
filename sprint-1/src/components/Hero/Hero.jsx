import React from 'react'
import './Hero.scss'
import MainData from '../../JSON/main-video-data.json'
import SideData from '../../JSON/side-video-data.json'

function Hero({submitHandler, mainVideo, comments}) {
    return(
      <div className="hero">
        
        <video 
        className="hero__img" 
        src={process.env.PUBLIC_URL + mainVideo.video} 
        poster={process.env.PUBLIC_URL + mainVideo.image} 
        alt="Hero img" 
        controls
        />

        <div>
          <h1>hi!</h1>
          <h1>{mainVideo.title}</h1>
          <h3>By {mainVideo.channel}</h3>
          <p>{mainVideo.timestamp}</p>
          <p>{mainVideo.views}</p>
          <p>{mainVideo.likes}</p>
          <p>{mainVideo.description}</p>
        </div>

        <div>
          <h3>3 Comments</h3>
          <form onSubmit={submitHandler}>
            <textarea name="commentBox" cols="30" rows="10"></textarea>
            <button>COMMENT</button>
          </form>
        </div>

        <div>
          {comments.map((comment, id) => {
            return (
              <div key={id}>
                <h3>{comment.name}</h3>
                <p>{comment.timestamp}</p>
                <p>{comment.comment}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default Hero;