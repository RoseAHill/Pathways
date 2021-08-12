import React from 'react'
import "./PathDisplay.css"

const PathHeader = ({ pathBanner, pathName, pathDescription }) => {
  
  return (
    <div className="path-header">
     
      <img className="banner-image" src={pathBanner} alt={`${pathName} Banner`} />
      
      <div className="row">
      
     <div className="section-title">
      <h2>{pathName}</h2>
      <p>{pathDescription}</p>
      </div>
      </div>
    </div>
  )
}

export default PathHeader