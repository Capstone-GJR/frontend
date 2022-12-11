import React, { useState } from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import FormInput from '../../forms/FormInput';
import { Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Button from '../../buttons/Button';
import axios from 'axios';
import { AuthZHeader } from '../../util/HelperFunctions';
import CustomAlert from '../../buttons/CustomAlert'

function UpdateUser(){
    const location = useLocation();
    const [showAlert, setShowAlert] = useState(false);
    const [showErrAlert, setShowErrAlert] = useState(false);
    const [form, setForm] = useState({
        firstName:'',
        lastName:'',
        email:''
    });

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        });
        setShowErrAlert(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`user/edit/${location.state.profile.id}`, form , AuthZHeader())
        .then((res) => {
            console.log(res); 
            setForm({
                firstName:'',
                lastName:'',
                email:''
            })
            setShowAlert(true);
            setTimeout(()=> setShowAlert(false),4000);
        })
        .catch((error) => {
            console.log(error);
            setShowErrAlert(true);
        });
    }
    
    return (
        <>
            <LargeNavbar />
            <TopNavbar/>
            <div className='container'>
                <h2 className='text-center m-3'>Update your Profile</h2>
                <CustomAlert
                    showAlert={showAlert}
                    alertVariant="success"
                    alertHeading="Your profile has been successfully updated!"
                />
                <CustomAlert
                    showAlert={showErrAlert}
                    alertVariant="danger"
                    alertHeading="Something went wrong, please try again!"
                />
                <div className='maxWidth600 margin-0-Auto'>
                    <Form>
                        <FormInput
                            // id=
                            label="FIRST NAME"
                            type= "text"
                            placeholder= {location.state.profile.firstName}
                            value={form.firstName}
                            onChange={(e) => setField("firstName", e.target.value)}
                            // isInvalid=
                            // errorMsg=
                        />
                        <FormInput
                            // id=
                            label="LAST NAME"
                            type= "text"
                            placeholder= {location.state.profile.lastName}
                            value={form.lastName}
                            onChange={(e) => setField("lastName", e.target.value)}
                            // isInvalid=
                            // errorMsg=
                        />
                        <FormInput
                            id="test"
                            label="EMAIL"
                            type= "email"
                            placeholder= {location.state.profile.email}
                            value={form.email}
                            onChange={(e) => setField("email", e.target.value)}
                            // isInvalid=
                            // errorMsg=
                        />
                        <Button title='SUBMIT EDIT' onClick={handleSubmit} />
                    </Form>
                </div>
            </div>
            <BottomNavbar/>
        </>
    )
}

export default UpdateUser