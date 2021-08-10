import React from 'react'

import Comment from '../Comment/Comment'

const Milestone = ({ title, description, comments }) => {
  const commentList = comments.map((comment, index) => {
    <Comment
      key={index}
      content={comment.content}
      refLink={comment.refLink}
      author="Joe Schmoe" //TODO: find author on backend
    />
  })
  
  return (
    <div className="milestone">
      <div className="milestone-info">
        <h3 className="milestone-title">{title}</h3>
        <p className="milestone-description">{description}</p>
      </div>
      <div className="comments-list">
        {commentList}
      </div>
    </div>
  )
}

export default Milestone