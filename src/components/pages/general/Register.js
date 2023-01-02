import React from "react";
import {Link} from "react-router-dom";
import RegisterForm from "../../forms/RegisterForm";

function Register() {
    return (
        <div className="container pgContainer maxWidth600">
            <h1>TRAQURA</h1>
            <h6 className="my-4">SIGN UP FOR A NEW ACCOUNT</h6>
            <RegisterForm/>
            <Link to='/login' className="customLink">
                <p className="my-5">ALREADY HAVE AN ACCOUNT? SIGN IN</p>
            </Link>
        </div>
    );
}

export default Register;
