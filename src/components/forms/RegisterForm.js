import React from "react";
import Form from "react-bootstrap/Form";
import Button from "../buttons/Button";

function RegisterForm() {

  const handleClick = (e) => {
    e.preventDefault();
    console.log("btn clicked");
  }

  return (
    <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="p-1 mx-3" >EMAIL</Form.Label>
        <Form.Control className="p-3 inputText" type="email" placeholder="email@email.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="p-1 mx-3">PASSWORD</Form.Label>
        <Form.Control className="p-3 inputText" type="password" placeholder="enter password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="p-1 mx-3">CONFIRM PASSWORD</Form.Label>
        <Form.Control className="p-3 inputText" type="password" placeholder="password" />
      </Form.Group>

      <Button title="SIGN UP" onClick={handleClick} />

    </Form>
  );
}

export default RegisterForm;
