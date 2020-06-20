import React from 'react'
import './Hero.scss'
import MainData from '../../JSON/main-video-data.json'
import SideData from '../../JSON/side-video-data.json'

class Hero extends React.Component {
  state = {
     mainData: MainData,
     comments: MainData[0].comments
  }

  submitHandler = (event) => {
    event.preventDefault()
    console.log("fuck")
    // console.log(event.target.commentBox.value)
    // console.log(this.state.mainData[0].comments[0])
    // this.setState({mainData: [...this.state.mainData[0].comments, {comments: {name: "oliver", timestamp: "Date.now()", comment: "wow"}}]})
    this.setState({comments: [...this.state.comments, {
      name: "Placeholder",
      comment: event.target.commentBox.value,
      timestamp: new Date().toLocaleString().split(' ')[0]
    }]})
    event.target.reset()
  }


  
  render() {
    return(
      <div className="hero">
        
        <video className="hero__img" src={process.env.PUBLIC_URL + this.state.mainData[0].video} poster={process.env.PUBLIC_URL + this.state.mainData[0].image} alt="Hero img" controls/>
      
        {/* <div>
          <h1>test</h1>
          <h2>{this.state.mainData[0].title}</h2>
          <p>{this.state.mainData[0].comments[0].comment}</p>
          <p>{this.state.test[0].name}</p>
        </div> */}

        <div>
          <h1>{this.state.mainData[0].title}</h1>
          <h3>By {this.state.mainData[0].channel}</h3>
          <p>{this.state.mainData[0].timestamp}</p>
          <p>{this.state.mainData[0].views}</p>
          <p>{this.state.mainData[0].likes}</p>
          <p>{this.state.mainData[0].description}</p>
        </div>

        <div>
          <h3>3 Comments</h3>
          <form onSubmit={this.submitHandler}>
            <textarea name="commentBox" cols="30" rows="10"></textarea>
            <button>COMMENT</button>
          </form>
        </div>

        <div>
          {this.state.comments.map((comment, id) => {
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
}

export default Hero;