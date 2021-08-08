import React, { useState } from "react";
import { NavLink, Link, BrowserRouter as Router } from "react-router-dom";
import "./NavBar.css";

function NavBar({ user, handleLogout }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    // <nav>
    // 	<div>
    // 	{user ? (
    // 		<ul>
    // 			<li>Welcome, {user.name}</li>
    // 			<li>
    // 				<NavLink to='' onClick={handleLogout}>Log out</NavLink>
    // 			</li>
    // 			<li>
    // 				<NavLink to="/users">Users</NavLink>
    // 			</li>
    // 		</ul>
    // 	) : (
    // 		<ul>
    // 			<li>
    // 				<NavLink to="/login">Log In</NavLink>
    // 			</li>
    // 			<li>
    // 				<NavLink to="/users">Users</NavLink>
    // 			</li>
    // 			<li>
    // 				<NavLink to="/signup">Sign Up</NavLink>
    // 			</li>
    // 		</ul>
    // 	)}
    // 	</div>
    // </nav>
    <>
	{/* LOGO */}
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          PATHWAYS
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
			
          
		  {/* PATHS */}
          <li className="nav-item">
            <Link to="/paths" className="nav-links">
              OUR PATHS
            </Link>
          </li>
		  {/* RESOURCES */}
          <li className="nav-item">
            <Link to="/resources" className="nav-links">
              RESOURCES
            </Link>
          </li>
		  {/* USERS */}
          <li className="nav-item">
            <Link to="/users" className="nav-links">
              USERS
            </Link>
          </li>
		  {/* LOGIN */}
          <li className="nav-item">
            <Link to="/login" className="nav-links">
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
