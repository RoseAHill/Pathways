import React, {useState} from 'react';
import './Comment.css'

//Components
import EditComment from '../FormComponents/EditComment/EditComment'
import DeleteButton from './DeleteButton';


//Services
import{
    // deleteComment,
    updateCommentLink,
} from '../../services/commentService'

const Comment = (props) => {
    console.log(props.currentUser, props.author)
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
            </p>
            {/* TODO: make a reference button component */}
            {props.refLink &&
                <a href={currentRefLink} rel="noreferrer" target="_blank">Provided Reference</a>
            }
            {"-Pathways User"}
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
            /></>
            }

        </div>
    )
}

export default Comment