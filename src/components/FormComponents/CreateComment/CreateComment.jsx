import React, { useState } from 'react';

//components

const CreateComment = (props) => {
    const [text, setText] = useState('')
// Always test your code while you're working. Don't let yourself get too carried away

const handleSubmit = (e) => {
    console.log(props.currentUser)
    e.preventDefault()
    const formData = {
        content: text,
        author: props.currentUser.profile
     }
     props.handleCreateComment(props.milestoneId, formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="create-comment-title">
                <label>Enter your Comment</label>
            </div>

            <input
            required
            autoComplete='off'
            placeholder="Comment"
            name="comment_text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            ></input>

            <button type="submit">Submit</button>

       
        
        </form>   
    )
}

export default CreateComment






