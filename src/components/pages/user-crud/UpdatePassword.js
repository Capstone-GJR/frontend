import React, { useState } from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import { Form } from 'react-bootstrap';
import FormInput from '../../forms/FormInput';
import Button from '../../buttons/Button';
import { AuthZHeader, checkPassword } from '../../util/HelperFunctions';
import CustomAlert from '../../buttons/CustomAlert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UpdatePassword(){
    const [showAlert, setShowAlert] = useState(false);
    const [showErrAlert, setShowErrAlert] = useState(false);
    const [form, setForm] = useState({
        password: '',
        password2: '',
    })
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const setField = (field, value) => {
        setForm({
          ...form,
          [field]:value
        })
        if(!!errors[field]) setErrors({
          ...errors,
          [field]:null
        })
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = checkPassword(form.password, form.password2);
        const password = form.password
        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
        } else {
            try {
                await axios.put('user/editPW', {password}, AuthZHeader());
                setForm({
                    password:'', 
                    password2: ''
                });
                setShowAlert(true);
                setTimeout(()=> navigate('/profile'), 4000);  
            } catch (error) {
                setShowErrAlert(true);
                setTimeout(()=> setShowErrAlert(false),4000); 
            }
        }
    }

    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <div className='container'>
                <h2 className='text-center m-3'>Update your password</h2>
                <div className='maxWidth600 margin-0-Auto'>
                    <Form>
                    <FormInput
                            label="Current Password"
                            type= "password"
                            placeholder="Current Password"
                            // value={form.password}
                            // onChange={(e) => setField("password", e.target.value)}
                            // isInvalid={!!errors.password}
                            // errorMsg={errors.password}
                        />
                        <FormInput
                            label="New Password"
                            type= "password"
                            placeholder="New Password"
                            value={form.password}
                            onChange={(e) => setField("password", e.target.value)}
                            isInvalid={!!errors.password}
                            errorMsg={errors.password}
                        />
                        <FormInput
                            label="Confirm Password"
                            type= "password"
                            placeholder="Confirm Password"
                            value={form.password2}
                            onChange={(e) => setField("password2", e.target.value)}
                            isInvalid={!!errors.password2}
                            errorMsg={errors.password2}
                        />
                        <Button title='SUBMIT' onClick={handleSubmit} />
                    </Form>
                </div>
                <CustomAlert
                    showAlert={showAlert}
                    alertVariant="success"
                    alertHeading="Password change successful!"
                />
                <CustomAlert
                    showAlert={showErrAlert}
                    alertVariant="danger"
                    alertHeading="Password change unsuccessful, try again!"
                />
            </div>
            <BottomNavbar/>
        </div>
    )
}

export default UpdatePassword