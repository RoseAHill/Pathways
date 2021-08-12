import React from 'react'
import { Link } from "react-router-dom"
import "./PathCard.css"

// Services

// Components


const PathCard = (props) => {
  // useStates

  // methods

  return (
    <>
     <div className="path-card">
       <div className="inner-part">
         <label htmlFor="" className="img">
           <img src={props.iconImg} alt={`${props.pathName} icon`} />
         </label>
         <div className="content">
           <span> PATHWAYS</span>
           <div className="title">{props.pathName}</div>
           <div className="text">
             {props.description}
           </div>
           <Link to={props.pathLink}>
           <button>VIEW SKILLS</button>
           </Link>
         </div>
       </div>
     </div>

    </>
  )
}

export default PathCard