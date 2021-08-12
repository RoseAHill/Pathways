import React from 'react'

// services
import { createComment, deleteComment} from '../../services/commentService'

// components
import Comment from '../Comment/Comment'
import CreateComment from '../FormComponents/CreateComment/CreateComment'


import './Milestone.css'

const Milestone = ({ title, description, comments, currentUser, milestoneId }) => {
  
  const commentList = comments.map((comment, index) => {
    return (<Comment
      // handleUpdateCommentLink={handleUpdateCommentLink}
      key={index}
      handleDeleteComment={handleDeleteComment}
      commentId={comment._id}
      milestoneId={milestoneId}
      currentUser={currentUser}
      content={comment.content}
      refLink={comment.refLink}
      author={comment.author}//TODO: find author on backend
    />)
  })

  const handleCreateComment = async (id, formData) => {
    console.log("this is a test", id, formData)
    try {
      await createComment(id, formData)
    } catch (error) {
      throw error
    }
  }

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteComment(milestoneId, commentId)
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
        <div className="add-comment">
          <CreateComment
          currentUser={currentUser}
          handleCreateComment={handleCreateComment}
          milestoneId={milestoneId}
          />
        </div>
      </div>
    </div>
  )
}

export default Milestone