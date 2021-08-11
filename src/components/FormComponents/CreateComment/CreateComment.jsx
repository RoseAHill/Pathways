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
        <div>

        </div>
    )
}






