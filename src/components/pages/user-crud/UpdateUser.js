import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import FormInput from '../../forms/FormInput';
import { Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function UpdateUser(){
    const location = useLocation();
    return (
        <>
            <LargeNavbar />
            <TopNavbar/>
            <h1>Update your Profile</h1>
            <Form className='d-flex justify-content-center flex-wrap'>
                <FormInput
                    id="test"
                    label="FIRST NAME"
                    type= "text"
                    placeholder= {location.state.profile.firstName}
                    // value=
                    // onChange=
                    // isInvalid=
                    // errorMsg=
                />
                <FormInput
                    id="test"
                    label="LAST NAME"
                    type= "text"
                    placeholder= {location.state.profile.lastName}
                    // value=
                    // onChange=
                    // isInvalid=
                    // errorMsg=
                />
                <FormInput
                    id="test"
                    label="EMAIL"
                    type= "text"
                    placeholder= {location.state.profile.email}
                    // value=
                    // onChange=
                    // isInvalid=
                    // errorMsg=
                />
            </Form>
            <BottomNavbar/>
        </>

    )
}

export default UpdateUser