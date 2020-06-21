import React from 'react'
import './Comments.scss'
import Avatar from '../../assets/Images/Mohan-muruge.jpg'


function Comments({submitHandler, comments}){

  // console.log(comments[0])

  return(
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
            <h5>Join the conversation</h5>
            <textarea className="add-comment__input" name="commentBox"></textarea>
            <button className="add-comment__btn btn">COMMENT</button>
          </form>
        </div>

      </div>
      <div>
        {comments.map((comment, id) => {
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


export default Comments;