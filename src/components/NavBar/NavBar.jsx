import React, {useState} from 'react'
import { NavLink, Link, BrowserRouter as Router } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
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
		
		</>
	)
}

export default NavBar
