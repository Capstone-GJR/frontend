import React from 'react'
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';

function LoginForm() {
  return (
    <Form>
        <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control className="p-3 inputText" type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Control className="p-3 inputText" type="password" placeholder="Password" />
        </Form.Group>

        <Link to='#' style={{textDecoration: 'none'}}>
            <p className='grayText text-center my-4'>Forgot password?</p>
        </Link>

        <Button title="LOGIN" />
    </Form>
  )
}

export default LoginForm