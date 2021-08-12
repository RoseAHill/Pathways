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
        <div className = "form-container">
              <h1> ADD A COMMENT</h1>
        <form  className = "comment-form" onSubmit={handleSubmit}>
          
            <textarea
                required
                autoComplete='off'
                label="Add a Comment"
                placeholder="Comment"
                className="comment-form-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
                    <div>
            <Button id="comment-button"type="submit" label="SUBMIT" variant="border" className="rainbow-m-around_medium" />
            </div>


       
        
        </form>   
        </div>
    )
}

export default CreateComment






