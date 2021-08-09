// {/* <Card
// 					type="path | skill"
// 					title="Placeholder Title"
// 					caption="This is a caption for the placeholder"
// 					linkTo="[Link goes here]"
// 					image="[image link (optional)]" /> */}

// To style: - class name is type name with "-card" at the end (path-card)
//           - to style banner, use banner-img
//           - to style card title and card caption, use card-title and card-caption
import React from 'react'
import { Link } from 'react-router-dom' 

// Services

// Components

const Card = ({ type, title, caption, linkTo, image }) => {
  let imageLink = image || "https://i.imgur.com/jYrqtj2.jpeg"

  return (
    <div className={`card ${type}-card`}>
        <img className="banner-img" src={imageLink} alt={`${title} banner`} />
        <h2 className="card-title" >{title}</h2>
        <p className="card-caption" >{caption}</p>
        <Link to={linkTo} className="card-link" />
    </div>
  )
}

export default Card