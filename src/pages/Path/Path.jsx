import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

// Services
import {
  getPathById,
} from '../../services/pathService'

// Components
import PathDisplay from '../../components/PathDisplay/PathDisplay'


const Path = (props) => {
  const { id } = props.match.params
  // useStates
  const [pathData, setPathData] = useState()
  const [skillsArray, setSkillsArray] = useState()

  // methods
  useEffect(() => {
    const fetchPath = async () => {
      try {
        const path = await getPathById(id)
        setPathData(path)
        setSkillsArray(path.skills)
      } catch (error) {
        throw error
      }
    }
    fetchPath()
    return () => { setPathData(null) }
  }, [id])


  return (
    <div className="path-page">
      {pathData && skillsArray ?
        <PathDisplay
          pathBanner={pathData.banner}
          pathDescription={pathData.description}
          pathName={pathData.title}
          skillsArray={skillsArray}
        />
        :
        <div className="loading-container">
          <img src="../../assets/logo-extract" alt="Pathways logo" />
        </div>
      }
    </div>
  )
}

export default withRouter(Path)