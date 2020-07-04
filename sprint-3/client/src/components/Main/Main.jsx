import React from "react";
import axios from "axios";
import Hero from "../Hero/Hero";
import Description from "../Description/Description";
import Comments from "../Comments/Comments";
import SideVideo from "../SideVideo/SideVideo";
// import SideData from "../../JSON/side-video-data.json";
import "./Main.scss";

const url = "https://project-2-api.herokuapp.com/videos";
const api_key = "?api_key=2198d2ef-b132-4f64-accc-f82f4168c9a8";
const defaultId = "/1af0jruup5gu";

class Main extends React.Component {
  state = {
    // mainData: MainData[0],
    // comments: MainData[0].comments,
    data: [],
    mainVid: [],
  };

  componentDidMount() {
    console.log("the component did mount");
    axios
      .get("video-list")
      .then((success) => {
        this.setState({
          data: success.data,
        });
      })
      .catch((err) => alert("is this it?", err));
  }

  componentDidUpdate(prevProps, _prevState) {
    if (
      !this.props.match.params.id &&
      this.props.match.params.id !== prevProps.match.params.id
    ) {
      axios.get(`${url}${defaultId}${api_key}`).then((success) => {
        this.setState({ mainVid: success.data });
        setTimeout(() => window.scrollTo(0, 0), 100);
      });
    } else if (this.props.match.params.id !== prevProps.match.params.id) {
      axios.get(`${this.props.match.params.id}`).then((success) => {
        this.setState({ mainVid: success.data });
        setTimeout(() => window.scrollTo(0, 0), 100);
      });
    }
  }

  setMainVideo = () => {
    const id = this.state.data[0].id;
    axios
      .get(`video/${id}`)
      .then((success) => {
        console.log(success);
        this.setState({
          mainVid: success.data,
        });
      })
      .catch((err) => alert("or is this it?", err));
  };


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
    axios.get(`${this.props.match.params.id}`).then((success) => {
      console.log(success);
    });

    event.preventDefault();
    if (event.target.commentBox.value === "") {
      return alert(
        "There is nothing in your comment, please stop being a hecker."
      );
    } else if (!this.props.match.params.id) {
      axios
        .post(`${url}${defaultId}/comments${api_key}`, {
          name: "Jon Barson",
          comment: event.target.commentBox.value,
        })
        .then((success) => {
          const oldData = this.state.mainVid;
          const newData = [...this.state.mainVid.comments, success.data];
          oldData.comments = newData;
          this.setState({
            mainVid: oldData,
          });
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${url}/${this.props.match.params.id}/comments${api_key}`, {
          name: "Jon Barson",
          comment: event.target.commentBox.value,
        })
        .then((success) => {
          const oldData = this.state.mainVid;
          const newData = [...this.state.mainVid.comments, success.data];
          oldData.comments = newData;
          this.setState({
            mainVid: oldData,
          });
        })
        .catch((err) => console.log(err));
    }
    event.target.reset();
  };

  deleteHandler = (id) => {
    if (!this.props.match.params.id) {
      axios
        .delete(`${url}${defaultId}/comments/${id}${api_key}`)
        .then((success) => {
          const oldData = this.state.mainVid;
          const newData = oldData.comments.filter((item) => item.id !== id);
          // const newData = [...this.state.mainVid.comments, success.data];
          oldData.comments = newData;
          this.setState({
            mainVid: oldData,
          });
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .delete(`${url}/${this.props.match.params.id}/comments/${id}${api_key}`)
        .then((success) => {
          const oldData = this.state.mainVid;
          const newData = oldData.comments.filter((item) => item.id !== id);
          oldData.comments = newData;
          this.setState({
            mainVid: oldData,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  

  render() {
    if (this.state.data.length === 0 || this.state.mainVid.length === 0) {
      if (this.state.data[0]) {
        this.setMainVideo();
      }
      return (
        <div className="main__loading">
          <h1>loading...</h1>
        </div>
      );
    } else {
      console.log("after all the get requests", this.state);
      return (
        <div className="main">
          <Hero mainVid={this.state.mainVid} />
          <div className="content">
            <div className="content__main">
              <Description
                mainVid={this.state.mainVid}
                dynaDate={this.dynaDate}
              />
              <Comments
                submitHandler={this.submitHandler}
                deleteHandler={this.deleteHandler}
                mainVid={this.state.mainVid.comments}
                dynaDate={this.dynaDate}
              />
            </div>
            <div className="content__aside">
              <SideVideo data={this.state.data} mainVid={this.state.mainVid} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Main;
