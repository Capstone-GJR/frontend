import axios from 'axios';
import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../buttons/Button';

function LoginForm() {
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const navigate = useNavigate();
  const [form, setForm] = useState({ 
    email:'', 
    password:'', 
  });

  // Function to set form values from user input
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]:value
    })
    // Check for errors, and remove when user types new input
    setEmailError("");
    setPassError("");
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //     axios
  //       .post
  //         ('/authenticate', {
  //           "email": form.email,
  //           "password": form.password
  //         })
  //         .then((res) => {
  //           // Private route to access private pages
  //           localStorage.setItem("access_token", res.headers.authorization);
  //           // Global axios defaults
  //           axios.defaults.headers.common['Authorization'] = res.headers.authorization;
  //           navigate("/allSpaces");
  //           setForm({email: "", password: ""});
  //           console.log(res.data)
  //         })
  //         .catch((error) => {
  //             console.log(error)
  //           const errorMsg = error.response.data;
  //           if(errorMsg === "Username not found") setEmailError(errorMsg)
  //           if(errorMsg === "Incorrect password provided") setPassError(errorMsg)
  //         })
  // }

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const res = await axios
              .post
              ('/authenticate', {
                  "email": form.email,
                  "password": form.password
              })
          console.log(res)
      } catch (error) {
          console.log(error)
          const errorMsg = error.response.data;
          if(errorMsg === "Username not found") setEmailError(errorMsg)
          if(errorMsg === "Incorrect password provided") setPassError(errorMsg)
      }
  }


  return (
    <Form>
        <Form.Group className="mb-4" controlId="email">
            <Form.Control 
              className="p-3 inputText" 
              type="text" 
              placeholder="Username (Email)" 
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              isInvalid={!!emailError}
              />
              <Form.Control.Feedback type="invalid" className="text-center">
                {emailError}
              </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="password">
            <Form.Control 
              className="p-3 inputText" 
              type="password" 
              placeholder="Password" 
              value={form.password}
              onChange={(e) => setField("password", e.target.value)}
              isInvalid={!!passError}
              />
              <Form.Control.Feedback type="invalid" className="text-center">
                {passError}
              </Form.Control.Feedback>
        </Form.Group>

        <Link to='#' className='customLink'>
            <p className='grayText'>Forgot password?</p>
        </Link>

        <Button title="LOGIN" onClick={handleSubmit} />
    </Form>
  )
}

export default LoginForm