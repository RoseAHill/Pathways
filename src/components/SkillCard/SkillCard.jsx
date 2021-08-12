import React from 'react'
import "./SkillCard.css"

import Button from '../Misc/Button/Button'

const SkillCard = ({ skillName, skillId, skillLevel }) => {

  return (
    
    <section className="skills-section" >
      <div className="skill-container">
      <div className="skill-card">
        <a href={`/skill/${skillId}`}>
        <div className="skill-img">
        <img src="https://istefan.ro/img/hero/web-developer-newsletter-coder-stefan-iordache.jpg" alt="course-img"/>
        </div>
        <div class="skill-info">
          <div className = "skill-level">
        <h4>Level {skillLevel}</h4> 
        </div>
        <div className="skill-name">
         <h3>{skillName}</h3>
         </div>
       
        {/* <Button
          linkTo={`/skill/${skillId}`}
          title="View Milestones"
        /> */}
        </div>
        </a>
      </div>
      </div>
      </section>
    
  )
}

export default SkillCard