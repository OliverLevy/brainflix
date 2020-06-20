import React from 'react'
import SideData from '../../JSON/side-video-data.json'
import './SideVideo.scss'

class SideVideo extends React.Component{
  state = { 
    sideData: SideData,
  }

// submitHandler = (event) => {
//   event.preventDefault()
//   console.log(event.target.testSubmit.value)
//   console.log(this.state.sideData)
//   this.setState({sideData: [...this.state.sideData, {
//     channel: "oliver's channel",
//     id: 10,
//     image: null,
//     title: event.target.testSubmit.value
//   } ]})
// }

  render(){
    return (
      <div>
        {/* <form onSubmit={this.submitHandler}>
          <input type="text" name="testSubmit"/>
          <button>submit</button>
        </form> */}

  

        {this.state.sideData.map(item =>{
          return (
            <div key={item.id}>
              <img src={process.env.PUBLIC_URL + item.image} alt="" className="testing"/>
              <h3>{item.title}</h3>
              <p>{item.channel}</p>
            </div>
            )
        })}
      </div>
    )
  }
}

export default SideVideo