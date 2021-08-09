import React, {Link} from 'react';
import './Comment.css'

//Components

//Services
// import{
//     createComment,
//     deleteComment,
//     updateCommentLink
// } from '../../services/commentService'

const Comment = (props) => {

    return(
        // props.commentArray.map((comment, idx) => {
            // <CommentCard 
            // content=
            // author=
            // refLink=
            // key={idx}
            // />

        // })
        <div className="comment">
            <p className="comment-content">
                {props.content}
            </p>
            {/* TODO: make a reference button component */}
            <a href={props.refLink} rel="noreferrer" target="_blank">Provided Reference</a>
            {`-${props.author}`}

        </div>
    )
}

export default Comment