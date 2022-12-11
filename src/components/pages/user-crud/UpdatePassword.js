import React, { useState } from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import { Form } from 'react-bootstrap';
import FormInput from '../../forms/FormInput';
import Button from '../../buttons/Button';

function UpdatePassword(){
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = () => {
        console.log("clicked submit");
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // isInvalid=
                            // errorMsg=
                        />
                        <FormInput
                            label="Confirm Password"
                            type= "password"
                            placeholder="Confirm Password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            // isInvalid=
                            // errorMsg=
                        />
                        <Button title='SUBMIT' onClick={handleSubmit} />
                    </Form>
                </div>
            </div>
            <BottomNavbar/>
        </div>
    )
}

export default UpdatePassword