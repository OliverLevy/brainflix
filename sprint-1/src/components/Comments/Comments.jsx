import React from 'react'
import './Comments.scss'


function Comments({submitHandler, comments}){

  // console.log(comments[0])

  return(
    <div>
      <div>
        <h3>3 Comments</h3>
        <form onSubmit={submitHandler}>
          <textarea name="commentBox"></textarea>
          <button>COMMENT</button>
        </form>
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