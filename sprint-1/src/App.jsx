import React from 'react';
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main'
import Hero from './components/Hero/Hero.jsx'
import SideVideo from './components/SideVideo/SideVideo'
import MainData from './JSON/main-video-data.json'
import SideData from './JSON/side-video-data.json'


class App extends React.Component{
  state = {
    mainData: MainData[0],
    comments: MainData[0].comments,
    sideData: SideData
 }


  submitHandler = (event) => {
    event.preventDefault()
    this.setState(
      {comments: [
        ...this.state.comments, 
        {
          name: "Placeholder",
          comment: event.target.commentBox.value,
          timestamp: new Date().toDateString()
        }]
      })
    event.target.reset()
  }


  render(){
    return (
      <div>
        <Header />
        <Main
        sideData={this.state.sideData}
        submitHandler={event => this.submitHandler(event)} 
        mainData={this.state.mainData} 
        comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
