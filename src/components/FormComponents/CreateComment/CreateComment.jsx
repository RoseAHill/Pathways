import { text } from 'express';
import React, { useState } from 'react';

//components

const CreateComment = (props) => {
    const [text, setText] = useState('')


const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
        content: text,
        author: props.currentUser._id,
        refLink: text,
     }
     props.handleCreateComment(formData)
    }

    return(
        <form>
            <div className="comment">
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






