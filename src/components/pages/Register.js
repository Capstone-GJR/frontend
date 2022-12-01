import React from "react";
import RegisterForm from "../forms/RegisterForm";

function Register() {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>TRAQURA</h1>
                    <p className="my-4">SIGN UP FOR A NEW ACCOUNT</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-lg-6 my-3">
                    <RegisterForm />
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <p className="my-5">ALREADY HAVE AN ACCOUNT? SIGN IN</p>
                </div>
            </div>
        </div>
    );
}

export default Register;
