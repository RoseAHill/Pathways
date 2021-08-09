import React from "react"
import "./Button.css"
import { Link } from "react-router-dom"

const Button = () => {

    return (
<Link to="/login">
    <button className="btn">LOGIN</button>
</Link>
    )
}

export default Button