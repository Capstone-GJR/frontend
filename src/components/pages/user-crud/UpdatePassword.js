import React, { useState } from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import { Form } from 'react-bootstrap';
import FormInput from '../../forms/FormInput';
import Button from '../../buttons/Button';
import { checkPassword } from '../../util/HelperFunctions';
import CustomAlert from '../../buttons/CustomAlert';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = checkPassword(form.password, form.password2);

        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
        } else {
            console.log("no form errors, make axios request");
            setShowAlert(true);
            setTimeout(()=> setShowAlert(false),4000);
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