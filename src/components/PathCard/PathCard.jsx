import React from 'react'
import { Link } from "react-router-dom"
import "./PathCard.css"
import image from "./webdev.png"

// Services

// Components


const PathCard = (props) => {
  // useStates

  // methods

  return (
    <>
     <div className="path-card">
       <div className="inner-part">
         <label htmlFor="" class="img">
           <img src="https://www.frontline.com.sg/wp-content/uploads/2017/06/web-development.jpg" alt="" />
         </label>
         <div className="content">
           <span> PATHWAYS</span>
           <div class="title"> TITLE GOES HERE</div>
           <div className="text">DESCRIPTION GOES HERE<br/>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit labore alias, expedita commodi deserunt. Magni magnam vero a vel.</div>
           <button>VIEW SKILLS</button>
         </div>
       </div>
     </div>

    </>
  )
}

export default PathCard