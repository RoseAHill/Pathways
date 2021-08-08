import React, {useState} from 'react'
import { NavLink, Link, BrowserRouter as Router } from 'react-router-dom'
import './NavBar.css'

function NavBar ({ user, handleLogout })  {
	const [click, setClick] = useState(false)

	const handleClick = () => setClick(!click)
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
		<nav className="navbar">
		<Link to="/" className="navbar-logo">
			PATHWAYS
		</Link>
		<div className="menu-icon" onClick={handleClick}>
             <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
		<ul className={click ? "nav-menu active" : "nav-menu"}>
<li className="nav-item">
	<Link to="/" className="nav-links">
		Home
	</Link>
</li>
<li className="nav-item">
                <Link to="/paths" className="nav-links" >
                   OUR PATHS
                </Link>       
            </li>
			<li className="nav-item">
                <Link to="/users" className="nav-links" >
                    SIGN UP
                </Link>       
            </li>
			
		</ul>


		</nav>
		</>
	)
}

export default NavBar
