import React from "react";
import axios from "axios";
import Hero from "../Hero/Hero";
import Description from "../Description/Description";
import Comments from "../Comments/Comments";
import SideVideo from "../SideVideo/SideVideo";
import MainData from "../../JSON/main-video-data.json";
import SideData from "../../JSON/side-video-data.json";
import "./Main.scss";

class Main extends React.Component {
  state = {
    mainData: MainData[0],
    comments: MainData[0].comments,
    sideData: SideData,
  };

  componentDidMount() {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/1a3cjruucpf7/?api_key=2198d2ef-b132-4f64-accc-f82f4168c9a8"
      )
      .then((success) => {
        console.log(success);
        console.log(success.data.comments);
        this.setState({
          mainData: success.data,
          comments: success.data.comments,
        });
        // this.setState()
      });
  }

  dynaDate = (datePosted) => {
    let seconds = (Date.now() - datePosted) / 1000;
    let unix = new Date(datePosted);
    let day = unix.getDate();
    let month = unix.getMonth() + 1;
    let year = unix.getFullYear();
    if (seconds < 60) {
      return `${Math.trunc(seconds)}s ago`;
    } else if (seconds < 3600) {
      return `${Math.trunc(seconds / 60)}m ago`;
    } else if (seconds < 86400) {
      return `${Math.trunc(seconds / 60 / 60)}h ago`;
    } else if (seconds < 2592000) {
      return `${Math.trunc(seconds / 30 / 60 / 60)}d ago`;
    } else {
      return `${month}/${day}/${year}`;
    }
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (event.target.commentBox.value == "") {
      return alert(
        "There is nothing in your comment, please stop being a hecker."
      );
    } else {
      axios
        .post(
          "https://project-2-api.herokuapp.com/videos/1a3cjruucpf7/comments?api_key=2198d2ef-b132-4f64-accc-f82f4168c9a8",
          { name: "oliver", comment: event.target.commentBox.value }
        )
        .then((success) => {
          console.log(success);
          console.log(success.data.comment);
          this.setState({
            comments: [...this.state.comments, success.data]
          })
          // axios
          //   .get(
          //     "https://project-2-api.herokuapp.com/videos/1a3cjruucpf7/?api_key=2198d2ef-b132-4f64-accc-f82f4168c9a8"
          //   )
          //   .then((success) => {
          //     this.setState({
          //       comments: success.data.comments,
          //     });
          //   });
        })
        
        .catch((err) => console.log(err));
      }
    event.target.reset();
  };

  render() {
    return (
      <div className="main">
        <Hero mainData={this.state.mainData} />

        <div className="content">
          <div className="content__main">
            <Description mainData={this.state.mainData} />

            <Comments
              submitHandler={this.submitHandler}
              comments={this.state.comments}
              dynaDate={this.dynaDate}
            />
          </div>

          <div className="content__aside">
            <SideVideo sideData={this.state.sideData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
