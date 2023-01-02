import React from 'react'
import {Link} from 'react-router-dom';
import LoginForm from '../../forms/LoginForm';

function Login() {
    return (
        <div className='pgContainer maxWidth600'>
            <Link to="/">
                <h1>TRAQURA</h1>
            </Link>
            <LoginForm/>
            <Link to='/register' className='customLink'>
                <p>NO ACCOUNT? SIGN UP!</p>
            </Link>
        </div>
    )
}

export default Login