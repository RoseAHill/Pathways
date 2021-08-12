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
  // This is a workaround! Look away David please for the love of god, just ignore this.
  const pathIdCooking = "611160dbe1f7503fdd2365c1"
  
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
          skillImage={pathIdCooking === id ? props.imageArray[1] : props.imageArray[0]}
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