import React from 'react';

const DeleteButton = (props) => {
    return ( 
        <div className="delete-buttons">
            {
                props.currentUser &&
                props.currentUser.profile === props.comment.commenter._id &&
                <button onClick={() => props.handleDeleteComment(props.comment._id)}>
                    🗑
                </button>
            }
        </div>
     );
}
 
export default DeleteButton;