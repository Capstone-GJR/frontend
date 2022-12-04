import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';

function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email: ', email);
    console.log('password: ', password);
  }

  return (
    <Form>
        <Form.Group className="mb-4" controlId="email">
            <Form.Control 
              className="p-3 inputText" 
              type="text" 
              placeholder="Username (Email)" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
        </Form.Group>

        <Form.Group className="mb-4" controlId="password">
            <Form.Control 
              className="p-3 inputText" 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
        </Form.Group>

        <Link to='#' className='customLink'>
            <p className='grayText'>Forgot password?</p>
        </Link>

        <Button title="LOGIN" onClick={handleSubmit} />
    </Form>
  )
}

export default LoginForm