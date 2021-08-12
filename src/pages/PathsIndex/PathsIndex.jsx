import React, {useState, useEffect} from 'react'
import PathCard from '../../components/PathCard/PathCard'
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

  // This is a workaround! Look away David please for the love of god, just ignore this.
  const imageArray = [
    "https://www.frontline.com.sg/wp-content/uploads/2017/06/web-development.jpg",
    "https://img2.goodfon.com/wallpaper/nbig/1/17/povar-produkty-pasta-gotovka.jpg"
  ]

  return (
    <div className="path-index">
      {paths.map((path, index) => (
        <PathCard
          key={index}
          iconImg={index < imageArray.length ? imageArray[index] : "https://www.vrtron.com/wp-content/uploads/2019/02/web-dev-1.png"}
          pathName={path.title}
          description={path.description}
          pathLink={`/path/${path._id}`}
        />
      ))}

    </div>
  )
}

export default PathsIndex