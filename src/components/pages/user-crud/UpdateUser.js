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

function UpdateUser(){
    const [form, setForm] = useState({
        firstName:'',
        lastName:'',
        email:''
    });

    const location = useLocation();

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`user/edit/${location.state.profile.id}`, form , AuthZHeader())
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
            <div className='container'>
                <h2 className='text-center m-3'>Update your Profile</h2>
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
                            type= "text"
                            placeholder= {location.state.profile.email}
                            value={form.email}
                            onChange={(e) => setField("email", e.target.value)}
                            // isInvalid=
                            // errorMsg=
                        />
                        <Button title='Submit Edit' onClick={handleSubmit} />
                    </Form>
                </div>
            </div>
            <BottomNavbar/>
        </>
    )
}

export default UpdateUser