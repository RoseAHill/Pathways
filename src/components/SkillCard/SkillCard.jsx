import React from 'react'
import "./SkillCard.css"

import Button from '../Misc/Button/Button'

const SkillCard = ({ skillName, skillId, skillLevel }) => {

  return (
    <>
    <div className = "row">
      <div className="skill-card">
        <a href={`/skill/${skillId}`}>
        <div className="skill-img">
        <img src="https://ca-times.brightspotcdn.com/dims4/default/0090820/2147483647/strip/true/crop/3000x2000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2c%2F81%2Ffcf6a0a04032869986b92e136c2c%2Fla-times-recipe-database-cooking-newsletter.jpg" alt="course-img"/>
        </div>
        <div class="skill-info">
        <h4>Level {skillLevel}</h4>
        <h3>{skillName}</h3>
        {/* <Button
          linkTo={`/skill/${skillId}`}
          title="View Milestones"
        /> */}
        </div>
        </a>
      </div>
      </div>
    </>
  )
}

export default SkillCard