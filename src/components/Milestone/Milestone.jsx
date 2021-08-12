import React from 'react'
import { createComment } from '../../services/commentService'

import Comment from '../Comment/Comment'
import CreateComment from '../FormComponents/CreateComment/CreateComment'

import './Milestone.css'

const Milestone = ({ title, description, comments, currentUser, milestoneId }) => {
  const commentList = comments.map((comment, index) => {
    return (<Comment
      key={index}
      content={comment.content}
      refLink={comment.refLink}
      author="Pathways User" //TODO: find author on backend
    />)
  })
  
  const handleCreateComment = async (id, formData) => {
    console.log("this is a test", id, formData)
    try {
      const newComment = await createComment(id, formData)
    } catch (error) {
      throw error
    }
  }

  return (
   <div class = "tabs">
     <div class = "tab">
     <input type="checkbox" id="chck1" />

    <div className="milestone">
      <div className="milestone-info">
        <label class="tab-label" for="chck1">
        <h3 className="milestone-title">{title}</h3>
        <p className="milestone-description">{description}</p>
        </label>
      </div>
      <div class="tab-content">
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
    </div>
    </div>
    </div>
  )
}

export default Milestone