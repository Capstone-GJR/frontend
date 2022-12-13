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

function UpdatePassword(){
    const [showAlert, setShowAlert] = useState(false);
    const [form, setForm] = useState({
        password: '',
        password2: '',
    })
    const [errors, setErrors] = useState({});

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
        const newPass = form.password
        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
        } else {
            try {
                const res = await axios.put('user/editPW', {newPass}, AuthZHeader)
                console.log(res);
                setShowAlert(true);
                setTimeout(()=> setShowAlert(false),4000);  
            } catch (error) {
                console.log(error);
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
                            label="Password"
                            type= "password"
                            placeholder="Password"
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
            </div>
            <BottomNavbar/>
        </div>
    )
}

export default UpdatePassword