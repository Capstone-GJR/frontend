import React, { useState } from 'react'
import Form from "react-bootstrap/Form";


function ColorField(props){
    return (
        <Form.Group className="mb-4 " controlId="color">
            <Form.Label>Color</Form.Label>
            <Form.Control className="p-3 inputText w-50 maxWidthInput"
                          type={props.type}
                          placeholder={props.placeholder}
                          value={props.value}
                          onChange={props.onChange}
                          isInvalid={props.isInvalid}
            />
            {/*<Form.Control.Feedback type="invalid" className="text-center">*/}
            {/*    {props.errorMsg}*/}
            {/*</Form.Control.Feedback>*/}
        </Form.Group>
    )
}

export default ColorField