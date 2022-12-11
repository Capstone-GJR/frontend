import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import FormInput from '../../forms/FormInput';
import { Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Button from '../../buttons/Button';
import axios from 'axios';
import { AuthZHeader } from '../../util/HelperFunctions';

function UpdateUser(){
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`user/edit/${location.state.profile.id}`, { 
            firstName: 'testFirstName',
            lastName: 'testLastName',
            email: 'testemail'
        }, AuthZHeader())
        .then((res) => {
            console.log(res); 
        })
        .catch((error) => {
            console.log(error);
        });
    }
    

    return (
        <>
            <LargeNavbar />
            <TopNavbar/>
            <h1>Update your Profile</h1>
            <Form className='d-flex flex-column justify-items-center'>
                <FormInput
                    // id=
                    label="FIRST NAME"
                    type= "text"
                    placeholder= {location.state.profile.firstName}
                    // value=
                    // onChange=
                    // isInvalid=
                    // errorMsg=
                />
                <FormInput
                    // id=
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
                <Button title='Submit Edit' onClick={handleSubmit} />
            </Form>
            <BottomNavbar/>
        </>
    )
}

export default UpdateUser