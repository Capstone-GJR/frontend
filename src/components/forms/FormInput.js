import React from 'react';
import Form from "react-bootstrap/Form"

function FormInput(
  {
    id, 
    label,
    type, 
    placeholder, 
    value, 
    onChange, 
    isInvalid, 
    errorMsg
  }
){

  return (
      <Form.Group  
        className="my-2" 
        controlId={id}
        style={{width:'95%', maxWidth:600}}
      >
        <Form.Label className="p-1 mx-3">{label}</Form.Label>
        <Form.Control className="p-3 inputText" 
          type={type} 
          placeholder={placeholder} 
          value={value}
          onChange={onChange}
          isInvalid={isInvalid}
        />
        <Form.Control.Feedback type="invalid" className="text-center">
          {errorMsg}
        </Form.Control.Feedback>
      </Form.Group>
  )
}

export default FormInput;