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

 dynaDate = (dateNow) => {
   let seconds = Date.now()/1000
   if(seconds < 60){
     return `${dateNow}`
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
        comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
