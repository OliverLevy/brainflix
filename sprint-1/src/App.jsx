import React from 'react';
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main'
import MainData from './JSON/main-video-data.json'
import SideData from './JSON/side-video-data.json'


class App extends React.Component{
  state = {
    mainData: MainData[0],
    comments: MainData[0].comments,
    sideData: SideData
 }

  dynaDate = (datePosted) => {
    let seconds = (Date.now() - datePosted) / 1000;
    let unix = new Date(datePosted)
    let day = unix.getDate();
    let month = unix.getMonth() + 1;
    let year = unix.getFullYear();
    if(seconds < 60){
      return `${Math.trunc(seconds)}s ago`
    } else if(seconds < 3600){
      return `${Math.trunc(seconds / 60)}m ago`
    } else if(seconds < 86400){
      return `${Math.trunc((seconds / 60) / 60)}h ago`
    } else if(seconds < 2592000){
      return `${Math.trunc(((seconds / 30) / 60) / 60)}d ago`
    } else {
      return `${month}/${day}/${year}`;
    }
   
 }

  submitHandler = (event) => {
    event.preventDefault()
    this.setState(
      {comments: [
        ...this.state.comments, 
        {
          name: "Placeholder",
          comment: event.target.commentBox.value,
          // timestamp: new Date().toDateString()
          // timestamp: this.dynaDate("it's 3")
          timestamp: Date.now()
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
        comments={this.state.comments}
        dynaDate={this.dynaDate}
        />
      </div>
    );
  }
}

export default App;
