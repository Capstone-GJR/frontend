import React from 'react';
import { axiosRequest } from '../../util/HelperFunctions';
import EditForm from '../../forms/EditForm';
import Button from "../../buttons/Button";
import Navbar from '../../ui/Navbar';

function UpdateComponent(props){

    const handleDeleteClick = async () => {
        try {
            const res = await axiosRequest('DELETE', props.deleteUrl);
            console.log(res);
            props.setShowSettings(false);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="pageContainer  p-3 mt-5 me-lg-auto ms-lg-auto pb-5 mb-5 mb-md-3 pb-md-3">
                <Navbar />
                <div className="m-auto">
                    <h2>{props.userObject.component.name}</h2>
                    <p>Keywords: {props.userObject.component.keywords}</p>
                </div>

                <EditForm props {...props} />

                <Button
                    title={props.backBtn}
                    onClick={() => props.setShowSettings(false)}
                />

                <Button
                    title="Delete"
                    onClick={handleDeleteClick}
                    width="w-75"
                />

            </div>
        </>
    )
}

export default UpdateComponent;