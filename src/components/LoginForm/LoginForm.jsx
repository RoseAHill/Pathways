import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './LoginForm.css'
import * as authService from '../../services/authService'

const LoginForm = (props) => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    authService.login(formData)
    .then(() => {
      props.handleSignupOrLogin()
      history.push('/')
    })
    .catch(err => {
      alert('Invalid Credentials')
    })
  }

  return (
  <div className="signup-page">
    <div className="left-container">
      <div className="form-container">
        <div className="title-container">
          <h3>Please enter your login information</h3>
        </div>


    <form autoComplete="off" onSubmit={handleSubmit} className="register-form">

      {/* <div className={styles.inputContainer}>
        <label htmlFor="email-input" className={styles.label}>
          Email
        </label> */}


        <input
          type="email"
          autoComplete="off"
          required
          id="email-input"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />


      {/* </div> */}
      {/* <div className={styles.inputContainer}>
        <label htmlFor="password-input" className={styles.label}>
          Password
        </label> */}


        <input
          type="password"
          autoComplete="off"
          required
          id="password-input"
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />


      {/* </div> */}

     
      <button 
                            autoComplete="off" 
                            id="submit-button"
                            type="submit"
                        >
                            SIGN IN
                        </button>
     
    </form>

    <div className="redirect-container">
                        <p>Need an account?</p>
                        <Link className="redirect-link" to="/signup">
                            <p>Sign Up</p>
                        </Link>
                    </div>
                    </div>
    </div>
    <div className="right-container">
      THIS IS THE RIGHT CONTAINER
    </div>
    </div>
  )
}
 
export default LoginForm
