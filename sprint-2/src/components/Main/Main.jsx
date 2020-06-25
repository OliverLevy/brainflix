import React from "react";
import axios from "axios";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Hero from "../Hero/Hero";
import Description from "../Description/Description";
import Comments from "../Comments/Comments";
import SideVideo from "../SideVideo/SideVideo";
import MainData from "../../JSON/main-video-data.json";
import SideData from "../../JSON/side-video-data.json";
import "./Main.scss";

const url = "https://project-2-api.herokuapp.com/videos";
const api_key = "?api_key=2198d2ef-b132-4f64-accc-f82f4168c9a8";
const defaultId = "/1af0jruup5gu";

class Main extends React.Component {
  state = {
    mainData: MainData[0],
    comments: MainData[0].comments,
    data: SideData,
    mainVid: MainData[0]
  };

  componentDidMount() {
    axios
      .get(`${url}${api_key}`)
      .then((success) => {
        console.log(success);
        this.setState({
          data: success.data,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.match.params);
    if (this.props.match.params !== prevProps.match.params) {
      console.log("you're on to something");
      axios.get(`${url}/${this.props.match.params.id}${api_key}`)
      .then(success => {
        console.log(success)
        console.log(this.state.mainVid)
        this.setState({mainVid: success.data})
      })
    }
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
          "https://project-2-api.herokuapp.com/videos/1af0jruup5gu/comments?api_key=2198d2ef-b132-4f64-accc-f82f4168c9a8",
          { name: "oliver", comment: event.target.commentBox.value }
        )
        .then((success) => {
          console.log(success);
          console.log(success.data.comment);
          this.setState({
            mainData: [...this.state.data, success.data],
          });
        })

        .catch((err) => console.log(err));
    }
    event.target.reset();
  };

  render() {
    return (
      <div className="main">
        <Hero mainVid={this.state.mainVid} />
        <div className="content">
          <div className="content__main">
            <Description mainVid={this.state.mainVid} />
            <Comments
              submitHandler={this.submitHandler}
              comments={this.state.mainVid.comments}
              dynaDate={this.dynaDate}
            />
          </div>
          <div className="content__aside">
            <SideVideo data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
