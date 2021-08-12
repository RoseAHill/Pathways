import React from 'react'
import "./PathDisplay.css"
import studying from "./studying.png"

const PathHeader = ({ pathBanner, pathName, pathDescription }) => {
  
  return (
    <div className="path-header">
     <div className="image-banner">
      <img className="banner-image" src={studying} alt={`${pathName} Banner`} />
      </div>
      
   
      
     <div className="section-title">
      <h2 className="path-title">{pathName}</h2>
      <p className="path-description">{pathDescription}</p>
      </div>
     
    </div>
  )
}

export default PathHeader