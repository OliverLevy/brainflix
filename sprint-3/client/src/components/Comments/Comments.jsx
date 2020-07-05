import React from "react";
import "./Comments.scss";
import Avatar from "../../assets/Images/Mohan-muruge.jpg";
import LikesIcon from "../../assets/Icons/SVG/Icon-likes.svg";

class Comments extends React.Component {
  state = {
    likeBtnOff: "old-comment__like--off",
    likeBtnOn: "old-comment__like--on"
  };

  likeBtnClassName = (likes) => {
    if (likes === 0) {
      return this.state.likeBtnOff
    } else {
      return this.state.likeBtnOn
    }
  };

  render() {
    const { submitHandler, mainVid, dynaDate, deleteHandler,likeCommentHandler } = this.props;
    return (
      <div>
        <div className="add-comment">
          <h3>3 Comments</h3>

          <div className="add-comment__card">
            <div className="add-comment__avatar-container">
              <img
                className="add-comment__avatar"
                src={Avatar}
                alt="user-avatar"
              />
            </div>
            <form onSubmit={submitHandler} className="add-comment__form">
              <div className="add-comment__input-container">
                <h5>Join the conversation</h5>
                <textarea
                  className="add-comment__input"
                  name="commentBox"
                  placeholder="Add a comment"
                  required
                ></textarea>
              </div>
              <button className="add-comment__btn btn">COMMENT</button>
            </form>
          </div>

          <div className="divider"></div>
        </div>
        <div className="old-comment">
          {mainVid.map((comment) => {
            return (
              <div key={comment.id}>
                <div className="old-comment__card">
                  <div className="old-comment__avatar"></div>
                  <div className="old-comment__items">
                    <div className="old-comment__info">
                      <h3>{comment.name}</h3>
                      <h4 className="date">{dynaDate(comment.timestamp)}</h4>
                    </div>
                    <div>
                      <p className="old-comment__comment">{comment.comment}</p>

                      <div className="old-comment__controls">
                        <button
                          className="old-comment__like"
                          onClick={() => {
                            
                            likeCommentHandler(comment.id)
                          }}
                        >
                          <img className="old-comment__like-img" src={LikesIcon} alt="likeIcon" />
                          <p className={this.likeBtnClassName(comment.likes)}>{comment.likes}</p>
                        </button>
                        <button
                          className="old-comment__delete-btn"
                          onClick={() => deleteHandler(comment.id)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Comments;
