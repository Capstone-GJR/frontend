import React from 'react';
import {axiosRequest} from '../../util/HelperFunctions';
import EditForm from '../../forms/EditForm';
import Button from "../../buttons/Button";
import Navbar from '../../ui/Navbar';

function UpdateComponent(props) {



    return (
            <div className="pgContainer maxWidth600">
                <h1>{props.userObject.component.name}</h1>
                <EditForm props {...props} />
            </div>
    )
}

export default UpdateComponent;