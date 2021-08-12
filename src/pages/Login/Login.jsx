import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.module.css'

const LoginPage = (props) => {
  return (
    <main >
      
      <LoginForm handleSignupOrLogin={props.handleSignupOrLogin}/>
    </main>
  )
}
 
export default LoginPage
