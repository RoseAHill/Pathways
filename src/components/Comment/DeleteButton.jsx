import React from 'react';

const DeleteButton = (props) => {
    return ( 
        <div className="delete-buttons">
            {
                props.currentUser &&
                props.currentUser.profile === props.commentAuthor &&
                <button onClick={() => props.handleDeleteComment(props.commentId)}>
                    🗑
                </button>
            }
        </div>
     );
}
 
export default DeleteButton;