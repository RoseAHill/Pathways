import React, { useEffect, useState } from 'react'

import './Skill.css'
// Services
import {
  getSkillById,
  handleCreateMilestone as createMilestone
} from '../../services/skillService'

// Components
import SkillDisplay from '../../components/Skill/SkillDisplay'
import { withRouter } from 'react-router-dom'

const Skill = (props) => {
  const { id } = props.match.params
  // useStates
  const [skillData, setSkillData] = useState()
  const [milestonesArray, setMilestonesArray] = useState()


  //methods

  const handleCreateMilestone = async (formData) => {
    try {
      const newMilestone = await createMilestone(formData)
      // newMilestone.addedBy = props.currentUser
    } catch (error) {
      throw error
    }
  }
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const skill = await getSkillById(id)
        setSkillData(skill)
        setMilestonesArray(skill.milestones)
      } catch (error) {
        throw error
      }
    }
    fetchPost()
    return () => { setSkillData(null)}
  }, [id])

  return (
    <div className="skill">
      {skillData && milestonesArray ?
        <SkillDisplay
          currentUser={props.currentUser}
          skillName={skillData.skillName}
          milestoneArray={milestonesArray}
          setMilestonesArray={setMilestonesArray}
          handleCreateMilestone={handleCreateMilestone}
          skillId={id}
        />
        :
        <div className="loading-container">
          <img src="../../assets/logo-extract" alt="Pathways logo" />
        </div>
      }
    </div>
  )
}

export default withRouter(Skill)