import axios from 'axios';
import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';
import { useLocalState } from '../util/useLocalState';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [jwt, setJwt] = useLocalState("", "jwt");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!jwt) {
      try {
        const response = await axios.post
        ('authenticate', {
            "email": email,
            "password": password
        });
          console.log(response);
          setJwt(response.headers.authorization);
      } catch (e) {
          console.log(e);
          console.log(e.response.data);
        }
    }
    setEmail("");
    setPassword("");
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