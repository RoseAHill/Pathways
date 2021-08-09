import React from 'react'

import Milestone from '../Milestone/Milestone'

const Skill = ({ skillName, milestoneArray }) => {
  const milestoneList = milestoneArray.map((milestone, index) => {
    <Milestone
      key={index}
      title={milestone.milestoneName}
      description={milestone.description}
      comments={milestone.comments} />
  })
  // useStates

  // methods

  return (
    <div className="skill">
      <h1 className="skill-title">{skillName}</h1>
      {milestoneList}
    </div>
  )
}

export default Skill