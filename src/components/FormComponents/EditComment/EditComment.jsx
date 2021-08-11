import React from 'react';

const EditComment = (props) => {





    return ( 
        <div className="edit-comment">
            {
                props.currentUser &&
                props.currentUser._id === props.comment.author._id &&
                <button onClick={() => props.handleUpdateCommentLink(props.comment._id)}>
                    Edit Link
                </button>

            }
        </div>
     );
}
 
export default EditComment;