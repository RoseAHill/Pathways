import React from 'react'
import "./SkillCard.css"

import Button from '../Misc/Button/Button'

const SkillCard = ({ skillName, skillId, skillLevel }) => {

  return (
    <>
    <section className="skills-section sec-padding" id="skills">
      <div className="container">
      <div className="skill-card">
        <a href={`/skill/${skillId}`}>
        <div className="skill-img">
        <img src="https://istefan.ro/img/hero/web-developer-newsletter-coder-stefan-iordache.jpg" alt="course-img"/>
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
      </section>
    </>
  )
}

export default SkillCard