import React from 'react'
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

function Login() {
  return (
    <div className='container'>
        <h1 className='text-center mb-1em'>TRAQURA</h1>
        <div className='row justify-content-center'>
            <div className='col col-lg-6 my-5'>
                <LoginForm />
            </div>
        </div>
        <Link to='/register' style={{textDecoration: 'none', color: 'black'}}>
            <p className='text-center customLink mt-6em'>NO ACCOUNT? SIGN UP!</p>
        </Link>
    </div>
  )
}

export default Login