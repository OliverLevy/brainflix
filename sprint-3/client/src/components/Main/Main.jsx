import React from "react";
import axios from "axios";
import Hero from "../Hero/Hero";
import Description from "../Description/Description";
import Comments from "../Comments/Comments";
import SideVideo from "../SideVideo/SideVideo";
import "./Main.scss";


class Main extends React.Component {
  state = {
    data: [],
    mainVid: [],
  };

  setDefaultVideo = () => {
    let id = this.state.data[0].id;
    axios
      .get(`/video/${id}`)
      .then((success) => {
        this.setState({
          mainVid: success.data,
        });
      })
      .catch((err) => alert(err));
      console.log(id)
  };

  componentDidMount() {
    axios
      .get("/video")
      .then((success) => {
        this.setState({
          data: success.data,
        });
      })
      .catch((err) => alert(err));
      console.log('component mounted')
  }

  componentDidUpdate(prevProps, _prevState) {
    if (
      !this.props.match.params.id &&
      this.props.match.params.id !== prevProps.match.params.id
    ) {
      this.setDefaultVideo();
    } else if (this.props.match.params.id !== prevProps.match.params.id) {
      this.setMainVideo();
    }
  }

  

  setMainVideo = () => {
    const endpoint = this.props.match.params.id;
    axios.get(endpoint).then((suc) => {
      this.setState({
        mainVid: suc.data,
      });
    });
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

  addComment = (comment) => {
    const oldData = this.state.mainVid;
    const newData = [...this.state.mainVid.comments, comment.data];
    oldData.comments = newData;
    this.setState({
      mainVid: oldData,
    });
  };

  deleteComment = (id) => {
    const oldData = this.state.mainVid;
    const newData = oldData.comments.filter((item) => item.id !== id);
    oldData.comments = newData;
    this.setState({
      mainVid: oldData,
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (event.target.commentBox.value === "") {
      return alert(
        "There is nothing in your comment, please stop being a hecker."
      );
    } else if (!this.props.match.params.id) {
      axios
        .post(`/video/${this.state.data[0].id}/comments`, {
          name: "Jon Barson",
          comment: event.target.commentBox.value,
        })
        .then((success) => {
          this.addComment(success)
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${this.props.match.params.id}/comments`, {
          name: "Jon Barson",
          comment: event.target.commentBox.value,
        })
        .then((success) => this.addComment(success))
        .catch((err) => console.log(err));
    }
    event.target.reset();
  };

  deleteHandler = (id) => {
    if (!this.props.match.params.id) {
      axios
        .delete(`/video/${this.state.data[0].id}/comments/${id}`)
        .then((success) => this.deleteComment(id))
        .catch((err) => console.log(err));
    } else {
      axios
        .delete(`${this.props.match.params.id}/comments/${id}`)
        .then((success) => this.deleteComment(id))
        .catch((err) => console.log(err));
    }
  };

  updateVideoLike = (success) => {
    this.setState({mainVid: success.data})
  }

  likeVideoHandler = () => {
    if (!this.props.match.params.id) {
      axios
        .post(`/video/${this.state.data[0].id}/like`)
        .then((success) => this.updateVideoLike(success))
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${this.props.match.params.id}/like`)
        .then((success) => this.updateVideoLike(success))
        .catch((err) => console.log(err));
    }
  }

  likeCommentHandler = (commentId) => {
    if (!this.props.match.params.id) {
      axios
        .post(`/video/${this.state.data[0].id}/comments/${commentId}/like`)
        .then((success) => this.updateVideoLike(success))
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${this.props.match.params.id}/comments/${commentId}/like`)
        .then((success) => this.updateVideoLike(success))
        .catch((err) => console.log(err));
    }
  }

  render() {
    if (this.state.data.length === 0 || this.state.mainVid.length === 0) {
      if (this.state.data[0] || !this.props.match.params) {
        this.setDefaultVideo();
      } else {
        this.setMainVideo();
      }
      return (
        <div className="main__loading">
          <h1>loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="main">
          <Hero mainVid={this.state.mainVid} />
          <div className="content">
            <div className="content__main">
              <Description
                mainVid={this.state.mainVid}
                dynaDate={this.dynaDate}
                likeVideoHandler={this.likeVideoHandler}
              />
              <Comments
                submitHandler={this.submitHandler}
                deleteHandler={this.deleteHandler}
                mainVid={this.state.mainVid.comments}
                dynaDate={this.dynaDate}
                likeCommentHandler = {this.likeCommentHandler}
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
