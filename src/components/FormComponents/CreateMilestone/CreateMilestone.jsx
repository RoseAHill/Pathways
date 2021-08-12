import React from 'react';

import './CreateMilestone.css'

const CreateMilestone = (props) => {

    
    return(
        <div className="create-milestone">
            <h2> ADD MILESTONE</h2>

            <form onSubmit={props.handleSubmit} >

               <div className = "input-field title">
                   <label htmlFor="milestone-title"> </label>
                   <input
                   required
                   autoComplete="off"
                   placeholder="Milestone Title"
                   name="milestoneName"
                   value={props.milestoneName}
                   onChange={e => props.setMilestoneName(e.target.value)}
                   id="milestone-title"
                   /> 
                   </div>

                <div className="input-field">
                <label htmlFor="milestone-description">  </label>
                   <textarea
                   required
                   autoComplete="off"
                   placeholder="Milestone Description"
                   name="description"
                   value={props.milestoneDescription}
                   onChange={e => props.setMilestoneDescription(e.target.value)}
                   id="milestone-description"
                   />
                    </div>
                   
                   <button className = "milestone-btn" type="submit">
                        Add Milestone
                   </button>
                
             
            </form> 
        </div>

    )
}

export default CreateMilestone