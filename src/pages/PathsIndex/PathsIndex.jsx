import React, {useState, useEffect} from 'react'

// Services
import * as pathService from '../../services/pathService' 

// Components



const PathsIndex = (props) => {
  // useStates
  const [paths, setPaths] = useState([])

  // methods

  useEffect(() => {
    const fetchPaths = async () => {
      try{
        const pathsData = await pathService.getAllPaths()
        console.log(pathsData)
      } catch (error){
        throw error
      }
    } 
    fetchPaths()
  }, []);

  return (
    <>
    </>
  )
}

export default PathsIndex