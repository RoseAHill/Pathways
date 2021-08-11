import React from 'react'

const PathHeader = ({ pathBanner, pathName, pathDescription }) => {
  
  return (
    <div className="path-header">
      <img src={pathBanner} alt={`${pathName} Banner`} />
      <h2>{pathName}</h2>
      <p>{pathDescription}</p>
    </div>
  )
}

export default PathHeader