import React, {useState} from 'react'
import CreateMilestone from '../FormComponents/CreateMilestone/CreateMilestone'

import Milestone from '../Milestone/Milestone'

const Skill = (props) => {
  const milestoneList = props.milestoneArray.map((milestone, index) => {
    <Milestone
      key={index}
      title={milestone.milestoneName}
      description={milestone.description}
      comments={milestone.comments} />
  })

  // useStates
  const [milestoneTitle, setMilestoneTitle] = useState('')
  const [milestoneDescription, setMilestoneDescription] = useState('')


  // methods
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      milestoneName: milestoneTitle, 
      description: milestoneDescription,
      addedBy: props.currentUser._id
    }
    props.handleCreateMilestone(formData)
  }

  return (
    <div className="skill">
      <h1 className="skill-title">{props.skillName}</h1>
      {milestoneList}
      <div>
        <CreateMilestone 
        handleSubmit={handleSubmit}
        milestoneName={milestoneTitle}
        milestoneDescription={milestoneDescription}
        setMilestoneName={setMilestoneTitle}
        setMilestoneDescription={setMilestoneDescription}
        />
      </div>
    </div>
  )
}

export default Skill