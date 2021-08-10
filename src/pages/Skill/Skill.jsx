import React, { useEffect, useState } from 'react'

// Services
import { getSkillById } from '../../services/skillService'

// Components
import SkillDisplay from '../../components/Skill/SkillDisplay'

const Skill = (props) => {
  const { id } = props.match.params
  // useStates
  const [skillData, setSkillData] = useState()
  const [milestonesArray, setMilestonesArray] = useState()


  // methods

  // const handleCreateMilestone = async (formData) => {
  //   try {
  //     const newMilestone = await 
  //   } catch (error) {
  //     throw error
  //   }
  // }
  


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const skill = await getSkillById(id)
        setTimeout(() => {
          setSkillData(skill)
          setMilestonesArray(skill.milestones)
        }, 1000)
      } catch (error) {
        throw error
      }
    }
    fetchPost()
    return () => { setSkillData(null)}
  }, [id])

  return (
    <div className="skill">
      {skillData ?
        <>
        <SkillDisplay skillName={skillData.skillName} milestoneArray={milestonesArray} skillId={id}/>
        </>
        :
        <div className="loading-container">
          <img src="../../assets/logo-extract" alt="Pathways logo" />
        </div>
      }
    </div>
  )
}

export default Skill