import React, { useState } from "react";
import { AccordionSection } from "react-rainbow-components";

// services
import { createComment, deleteComment } from "../../services/commentService";

// components
import Comment from "../Comment/Comment";
import CreateComment from "../FormComponents/CreateComment/CreateComment";

import "./Milestone.css";

const Milestone = ({
  title,
  description,
  comments,
  currentUser,
  milestoneId,
}) => {
  const [commentsArray, setCommentsArray] = useState([...comments]);

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteComment(milestoneId, commentId);
      setCommentsArray(
        commentsArray.filter((comment) => comment._id !== commentId)
      );
    } catch (error) {
      throw error;
    }
  };

  const commentList = commentsArray.map((comment, index) => {
    return (
      <Comment
        key={index}
        handleDeleteComment={handleDeleteComment}
        commentId={comment._id}
        milestoneId={milestoneId}
        currentUser={currentUser}
        content={comment.content}
        refLink={comment.refLink}
        author={comment.author}
      />
    );
  });
  const handleCreateComment = async (id, formData) => {
    try {
      const res = await createComment(id, formData);
      setCommentsArray([...commentsArray, res]);
    } catch (error) {
      throw error;
    }
  };
  return (
    <AccordionSection className="accordion-title" label={(
    <>
    <h3 className="milestone-title">{title}- {description}</h3></>
    )}>
    <div className="milestone">
      <div className="comment-section">
        <div className="comments-list">{commentList}</div>
      </div>
      <div className="add-comment">
        <CreateComment
          currentUser={currentUser}
          handleCreateComment={handleCreateComment}
          milestoneId={milestoneId}
          milestoneTitle={title}
        />
      </div>
    </div>
    </AccordionSection>
  );
};

export default Milestone;
