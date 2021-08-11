import React from 'react'
import { createComment } from '../../services/commentService'

import Comment from '../Comment/Comment'
import CreateComment from '../FormComponents/CreateComment/CreateComment'

const Milestone = ({ title, description, comments, currentUser }) => {
  const commentList = comments.map((comment, index) => {
    return (<Comment
      key={index}
      content={comment.content}
      refLink={comment.refLink}
      author="Pathways User" //TODO: find author on backend
    />)
  })
  
  const handleCreateComment = async (formData) => {
    try {
      const newComment = await createComment(formData)
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="milestone">
      <div className="milestone-info">
        <h3 className="milestone-title">{title}</h3>
        <p className="milestone-description">{description}</p>
      </div>
      <div className="comment-section">
        <div className="comments-list">
          {commentList}
        </div>
        <div className="addComment">
          <CreateComment
          currentUser={currentUser}
          handleCreateComment={handleCreateComment}
          />
        </div>
      </div>
    </div>
  )
}

export default Milestone