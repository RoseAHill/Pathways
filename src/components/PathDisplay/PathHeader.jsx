import React from 'react'

const PathHeader = ({ pathBanner, pathName, pathDescription }) => {
  
  return (
    <div className="path-header">
      <img src={pathBanner} alt={`${pathName} Banner`} />
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