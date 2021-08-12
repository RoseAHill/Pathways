import React, { useState } from 'react';

//components
import './EditComment.css'

const EditComment = (props) => {

const [showEditForm, setShowEditForm] = useState(false) //will trigger if we see the form

    return ( 
        
        <div className="edit-comment">
                <button onClick={() => setShowEditForm(!showEditForm)}> 
                    Edit Link
                </button>

        <form onSubmit={props.handleSubmit}  className={`edit-comment-form${!showEditForm && " hide-comment-form" }`}>
            {/* placeholder text of new link and button to submit */}
            <label htmlFor="edit-comment-form">Edit</label>
            <input
            required
            autoComplete='off'
            placeholder="New Link"
            name="refLink"
            value={props.newRefLink}
            onChange={(e) => props.setNewRefLink(e.target.value)}
            id="edit-comment-input"
            />
            <button type="submit">Update</button>
        </form>
        </div>
     );
}
 
export default EditComment;