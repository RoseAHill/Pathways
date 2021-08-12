import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button(props) {
  return (
    <Link to={props.linkTo} onClick={props.action}>
      <button className="btn">{props.title}</button>
    </Link>
  );
}

export default Button