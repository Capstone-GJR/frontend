import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import FormInput from '../../forms/FormInput';
import { Form } from 'react-bootstrap';

function UpdateUser(){
    return (
        <>
            <LargeNavbar />
            <TopNavbar/>
            <h1>Update your Profile</h1>
            <Form className='d-flex justify-content-center flex-wrap'>
                <FormInput
                    id="test"
                    type= "test"
                    placeholder= "test"
                    value= "test"
                    onChange= "test"
                    isInvalid= {false}
                    errorMsg= {null}
                />
            </Form>
            <BottomNavbar/>
        </>

    )
}

export default UpdateUser