import React, { useState } from 'react';
import { Button, Input } from 'react-rainbow-components'
import "./CreateComment.css"

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
            <Input
                required
                autoComplete='off'
                label="Add a Comment"
                placeholder="Comment"
                className="comment-form-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <Button type="submit" label="Submit" variant="border" className="rainbow-m-around_medium" />
{/* 
            <input
            required
            autoComplete='off'
            placeholder="Comment"
            name="comment_text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            ></input>

            <button type="submit">Submit</button> */}

       
        
        </form>   
    )
}

export default CreateComment






