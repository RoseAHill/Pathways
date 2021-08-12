import React, {useState} from 'react'
import { Accordion } from "react-rainbow-components";
import "./SkillDisplay.css"

import CreateMilestone from '../FormComponents/CreateMilestone/CreateMilestone'
import Milestone from '../Milestone/Milestone'


const Skill = (props) => {
  const milestoneList = props.milestoneArray.map((milestone, index) => {
    return (<Milestone
      key={index}
      title={milestone.milestoneName}
      description={milestone.description}
      comments={milestone.comments}
      currentUser={props.currentUser}
      milestoneId={milestone._id} />)
  })

  // useStates
  const [milestoneTitle, setMilestoneTitle] = useState('')
  const [milestoneDescription, setMilestoneDescription] = useState('')


  // methods
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      milestoneName: milestoneTitle, 
      description: milestoneDescription,
      addedBy: props.currentUser._id,
      parentSkill: props.skillId
    }
    const res = await props.handleCreateMilestone(formData)
    props.setMilestoneArray([...milestoneList, res])
  }

  return (
    <div className="skill" >
      <h1 className="skill-title">{props.skillName}</h1>
      <div className = "skill-milestone">
      <div className="rainbow-m-around_xx-large">
        <Accordion id="milestone-accordion" >
          {milestoneList}
        </Accordion>
      </div>
      <div className="create-milestone">
        <CreateMilestone 
        handleSubmit={handleSubmit}
        milestoneName={milestoneTitle}
        milestoneDescription={milestoneDescription}
        setMilestoneName={setMilestoneTitle}
        setMilestoneDescription={setMilestoneDescription}
        />
        </div>
      </div>
    </div>
  )
}

export default Skill