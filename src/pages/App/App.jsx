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

	// This is a workaround! Look away David please for the love of god, just ignore this.
  const imageArray = [
    "https://www.frontline.com.sg/wp-content/uploads/2017/06/web-development.jpg",
    "https://img2.goodfon.com/wallpaper/nbig/1/17/povar-produkty-pasta-gotovka.jpg"
  ]

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
					<PathsIndex imageArray={imageArray} />
				</Route>

				<Route path='/path/:id'>
					<Path imageArray={imageArray} />
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
