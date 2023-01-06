import React from 'react';
import EditForm from '../../forms/EditForm';

function UpdateComponent(props) {

    return (
            <div className="pgContainer maxWidth600">
                <h1>{props.userObject.component.name}</h1>
                <EditForm props {...props} />
            </div>
    )
}

export default UpdateComponent;