import React, {useState} from 'react';
import './Comment.css'

//Components
import EditComment from '../FormComponents/EditComment/EditComment'


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
        const res = await handleUpdateCommentLink(formData)
        setCurrentRefLink(newRefLink)
    
    }

    const handleUpdateCommentLink = async (refLink) => {
        try {
            const editLink = await updateCommentLink(refLink, props.commentId, props.milestoneId)
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
                props.currentUser._id === props.author && 
            <EditComment 
            handleSubmit={handleSubmit}
            newRefLink={newRefLink}
            setNewRefLink={setNewRefLink}
            />
            }

        </div>
    )
}

export default Comment