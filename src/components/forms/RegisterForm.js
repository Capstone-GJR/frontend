import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "../buttons/Button";

function RegisterForm() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const regex = /\S+@\S+\.\S+/;
  const blankErrorMsg = 'Field can not be blank';
  const emailErrorMsg = 'Please enter a valid email';

  // Function to set form values from user input
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]:value
    })

    // Check and see if errors exist, and remove them from the error object
    if(!!errors[field]) setErrors({
      ...errors,
      [field]:null
    })
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    // Get new erros
    const formErrors = validateForm()

    // Conditional to check for errors
    if(Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      // Submit post request if no errors
      console.log('submit form ',form);
    }
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label className="p-1 mx-3" >FIRST NAME</Form.Label>
        <Form.Control 
          className="p-3 inputText" 
          type="text" 
          placeholder="first name" 
          value={form.firstName}
          onChange={(e) => setField("firstName", e.target.value)}
          isInvalid={!!errors.firstName}
          />
        <Form.Control.Feedback type='invalid' className="text-center">
          {errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label className="p-1 mx-3" >LAST NAME</Form.Label>
        <Form.Control 
          className="p-3 inputText" 
          type="text" 
          placeholder="last name" 
          value={form.lastName}
          onChange={(e) => setField("lastName", e.target.value)}
          isInvalid={!!errors.lastName}
          />
        <Form.Control.Feedback type="invalid">
          {errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label className="p-1 mx-3" >EMAIL</Form.Label>
        <Form.Control 
          className="p-3 inputText" 
          type="email" 
          placeholder="email@email.com" 
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          isInvalid={!!errors.email}
          />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label className="p-1 mx-3">PASSWORD</Form.Label>
        <Form.Control 
          className="p-3 inputText" 
          type="password" 
          placeholder="enter password" 
          value={form.password}
          onChange={(e) => setField("password", e.target.value)}
          isInvalid={!!errors.password}
          />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password2">
        <Form.Label className="p-1 mx-3">CONFIRM PASSWORD</Form.Label>
        <Form.Control 
          className="p-3 inputText" 
          type="password" 
          placeholder="password" 
          value={form.password2}
          onChange={(e) => setField("password2", e.target.value)}
          isInvalid={!!errors.password2}
          />
        <Form.Control.Feedback type="invalid">
          {errors.password2}
        </Form.Control.Feedback>
      </Form.Group>

      <Button title="SIGN UP" onClick={handleSubmit} />
    </Form>
  );
}

export default RegisterForm;
