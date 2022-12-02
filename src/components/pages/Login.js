import React from 'react'
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

function Login() {
  return (
    <div className='pageContainer'>
      <h1>TRAQURA</h1>
      <LoginForm />
      <Link to='/register' className='customLink'>
        <p>NO ACCOUNT? SIGN UP!</p>
      </Link>
    </div>
  )
}

export default Login