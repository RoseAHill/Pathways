import React from 'react';

import './CreateMilestone.css'

const CreateMilestone = (props) => {

    
    return(
        <div className="create-milestone">

            <form className="milestone-form" onSubmit={props.handleSubmit} >
               <div>
                   <label htmlFor="milestone-title"> Add Milestone </label>
                   <input
                   required
                   autoComplete="off"
                   placeholder="Milestone Title"
                   name="milestoneName"
                   value={props.milestoneName}
                   onChange={e => props.setMilestoneName(e.target.value)}
                   id="milestone-title"
                   /> 

                <label htmlFor="milestone-description"> Milestone Description </label>
                   <textarea
                   required
                   autoComplete="off"
                   placeholder="Milestone Description"
                   name="description"
                   value={props.milestoneDescription}
                   onChange={e => props.setMilestoneDescription(e.target.value)}
                   id="milestone-description"
                   />

                   <button type="submit">
                        Add Milestone
                   </button>
               </div>   
            </form> 
        </div>

    )
}

export default CreateMilestone