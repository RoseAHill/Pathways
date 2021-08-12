import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.module.css'

const Signup = (props) => {
  const [message, setMessage] = useState()

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main>
     
      {message && <p>{message}</p> }
      <SignupForm 
        updateMessage={updateMessage}
        handleSignupOrLogin={props.handleSignupOrLogin}
      />
    </main>
  )
}

export default Signup
