import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';

function Logout() {
  return (
    <div className='pageContainer'>
        <h1>
            You have been logged out.
        </h1>
        <Link to="/login">
            <Button title="LOGIN" />
        </Link>
    </div>
  )
}

export default Logout