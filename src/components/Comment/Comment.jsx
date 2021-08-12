import React, {useState} from 'react';
import './Comment.css'

//Components
import EditComment from '../FormComponents/EditComment/EditComment'
import DeleteButton from './DeleteButton';
import { Button } from 'react-rainbow-components';

//Services
import{
    // deleteComment,
    updateCommentLink,
} from '../../services/commentService'

const Comment = (props) => {
    const [currentRefLink, setCurrentRefLink] = useState(props.refLink)
    const [newRefLink, setNewRefLink] = useState('')

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            refLink: newRefLink
        }
            await handleUpdateCommentLink(formData)
        setCurrentRefLink(newRefLink)
    
    }

    const handleUpdateCommentLink = async (refLink) => {
        try {
            await updateCommentLink(refLink, props.commentId, props.milestoneId)
        } catch (error) {
            throw error
        }
    }


    return(
        <div className="comment">
            <p className="comment-content">
                {props.content}
                {" -Pathways User"}
            </p>
            <p className="comment-subtext">
                {props.refLink &&
                    <Button
                    linkTo={currentRefLink}
                    label="Comment Reference"
                    />
                }
            {props.currentUser &&
                props.currentUser.profile === props.author && 
            <><EditComment 
            handleSubmit={handleSubmit}
            newRefLink={newRefLink}
            setNewRefLink={setNewRefLink}
            />
            <DeleteButton 
            currentUser={props.currentUser}
            commentAuthor={props.author}
            handleDeleteComment={props.handleDeleteComment}
            commentId={props.commentId}
            /></>
            }
            </p>

        </div>
    )
}

export default Comment