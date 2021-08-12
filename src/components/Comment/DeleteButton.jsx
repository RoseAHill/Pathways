import React from 'react';
import { Button } from 'react-rainbow-components';
import './Comment.css'

const DeleteButton = (props) => {
    return ( 
        <div className="delete-buttons">
            {
                props.currentUser &&
                props.currentUser.profile === props.commentAuthor &&
                <Button
                    onClick={() => props.handleDeleteComment(props.commentId)}
                    title="Delete"
                    label="🗑"
                />
            }
        </div>
     );
}
 
export default DeleteButton;