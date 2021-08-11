import React from 'react'
import SkillCard from '../SkillCard/SkillCard'
import PathHeader from './PathHeader'

const PathDisplay = ({ pathBanner, pathName, pathDescription, skillsArray }) => {
  const skillCards = skillsArray.map((skill, index) => (
    <SkillCard
      skillName={skill.skillName}
      skillId={skill._id}
      skillLevel={index + 1}
      key={index}
    />
  ))

  return (
    <div className="path-display">
      <PathHeader
        pathBanner={pathBanner}
        pathName={pathName}
        pathDescription={pathDescription}
      />
      {skillCards}
    </div>
  )
}

export default PathDisplay