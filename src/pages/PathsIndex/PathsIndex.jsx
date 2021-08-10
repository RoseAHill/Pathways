import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
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
        setPaths(pathsData)
      } catch (error){
        throw error
      }
    } 
    fetchPaths()
  }, []);

  console.log(paths)

  return (
    <div className="path-index">
      {paths.map((path, idx) => (
      <div key={idx}>
       <Link to={`/details/${path._id}`}> <h1>{path.title}</h1> </Link> 
        
      </div>
      ))}
    </div>
  )
}

export default PathsIndex