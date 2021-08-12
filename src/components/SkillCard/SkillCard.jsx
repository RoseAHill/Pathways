import React from 'react'
import "./SkillCard.css"

import Button from '../Misc/Button/Button'

const SkillCard = ({ skillName, skillId, skillLevel }) => {

  return (
    <>
      <div className="skill-card">
        <h4>Level {skillLevel}</h4>
        <h3>{skillName}</h3>
        <Button
          linkTo={`/skill/${skillId}`}
          title="View Milestones"
        />
      </div>
    </>
  )
}

export default SkillCard