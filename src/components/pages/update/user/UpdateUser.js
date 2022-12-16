import React, { useState } from 'react';
import TopNavbar from "../../../navbar/TopNavbar";
import BottomNavbar from "../../../navbar/BottomNavbar";
import LargeNavbar from "../../../navbar/LargeNavbar";
import FormInput from '../../../forms/FormInput';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../buttons/Button';
import axios from 'axios';
import { AuthZHeader } from '../../../util/HelperFunctions';
import CustomAlert from '../../../buttons/CustomAlert'

function UpdateUser(){
    const [showAlert, setShowAlert] = useState(false);
    const [showErrAlert, setShowErrAlert] = useState(false);
    const [inputErrors, setInputErrors] = useState(false);
    const [form, setForm] = useState({
        firstName:'',
        lastName:'',
        email:''
    });
    const location = useLocation();
    const defaultFname = location.state.profile.firstName;
    const defaultLname = location.state.profile.lastName;
    const defaultEmail = location.state.profile.email;
    const navigate = useNavigate();

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        });
        setShowErrAlert(false);
        setInputErrors(false);
    }

    const setDefaultValues = () => {
        if(form.firstName === '') form.firstName = defaultFname;
        if(form.lastName === '') form.lastName = defaultLname;
        if(form.email === '') form.email = defaultEmail;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.firstName === '' && form.lastName === '' && form.email === '') {
            setInputErrors(true)
        } else {
            try {
                setDefaultValues();
                await axios.put(`user/edit/`, form , AuthZHeader());
                setForm({
                    firstName:'',
                    lastName:'',
                    email:''
                })
                setShowAlert(true);
                setTimeout(()=> navigate('/profile'),4000);
            } catch (error) {
                setShowErrAlert(true);
            }
        }
    }
    
    return (
        <>
            <LargeNavbar />
            <TopNavbar/>
            <div className='container'>
                <h1 className='text-center m-3 p-5'>Update your Profile</h1>
                <div className='maxWidth600 margin-0-Auto'>
                    <Form>
                        <FormInput
                            label="FIRST NAME"
                            type= "text"
                            placeholder= {defaultFname}
                            value={form.firstName}
                            onChange={(e) => setField("firstName", e.target.value)}
                            isInvalid={!!inputErrors}
                            errorMsg="All fields can not be blank"
                        />
                        <FormInput
                            label="LAST NAME"
                            type= "text"
                            placeholder= {defaultLname}
                            value={form.lastName}
                            onChange={(e) => setField("lastName", e.target.value)}
                            isInvalid={!!inputErrors}
                        />
                        <FormInput
                            label="EMAIL"
                            type= "email"
                            placeholder= {defaultEmail}
                            value={form.email}
                            onChange={(e) => setField("email", e.target.value)}
                            isInvalid={!!inputErrors}
                        />
                        <Button title='SUBMIT EDIT' onClick={handleSubmit} />
                    </Form>
                </div>
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
            </div>
            <BottomNavbar/>
        </>
    )
}

export default UpdateUser