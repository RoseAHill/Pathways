import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";
import logo from "./logo.png"
import {Button}  from "../Misc/Button/Button"

function NavBar({ user, handleLogout }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const exitMobile = () => setClick(false)
  return (
      <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
         <img className = "logo" src={logo} alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
		  {/* PATHS */}
          <li className="nav-item">
            <Link to="/paths" className="nav-links" onClick={exitMobile}>
              OUR PATHS
            </Link>
          </li>
          <li className="nav-item">
            <p className="user-guest-name">
              Welcome{user ? `, ${user.name}` : ", Guest"}
            </p>
          </li>
		  {/* LOGIN */}
      { user ? 
        ( <>
          <li>
            <Link to="" onClick={handleLogout} className="nav-links-mobile">
              LOGOUT
            </Link>
          </li>
        <Button linkTo="" title="LOGOUT" action={handleLogout} />
        </>
        )
        :
        (
          <>
            <li>
              <Link to="/login" className="nav-links-mobile">
                LOGIN
              </Link>
            </li>
          <Button linkTo="/login" title="LOGIN" />
          </>
        )
      }
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
