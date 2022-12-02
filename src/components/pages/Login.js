import React from 'react'
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

function Login() {
  return (
    <div className='container'>
        <h1>TRAQURA</h1>
        <LoginForm />
        <Link to='/register' style={{textDecoration: 'none'}}>
            <p className='lightGrey text-center'>NO ACCOUNT? SIGN UP!</p>
        </Link>
    </div>
  )
}

export default Login