import React, { useState } from 'react'
import { Switch, Route, Redirect, useHistory} from 'react-router-dom'

// Services
import * as authService from '../../services/authService'

// Pages + Components
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Path from '../Path/Path'

import PathsIndex from '../PathsIndex/PathsIndex'
import Skill from '../Skill/Skill'

const App = () => {
	const history = useHistory()
	const [user, setUser] = useState(authService.getUser())

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		history.push('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	return (
		<>
			<NavBar user={user} handleLogout={handleLogout}/>

			<Switch>
			
				<Route exact path='/'>
					<Landing user={user} />
				</Route>

				<Route exact path='/signup'>
					{user ? 
						<Redirect to='/' /> : 
						<Signup handleSignupOrLogin={handleSignupOrLogin}/>
					}
				</Route>

				<Route exact path='/login'>
					{user ? 
						<Redirect to='/' /> : 
						<Login handleSignupOrLogin={handleSignupOrLogin}/>
					}
				</Route>

				<Route exact path='/paths'>
					<PathsIndex />
				</Route>

				<Route path='/path/:id'>
					<Path />
				</Route>

				<Route path='/skill/:id'>
					<Skill currentUser={user} /> 
				</Route>

				{/* ProtectedRoute to /profile */}


				{/* <Route exact path='/users'>
					{user ? <Users /> : <Redirect to='/login' />}
				</Route> */}

			</Switch>
		</>
	)
}
 
export default App
