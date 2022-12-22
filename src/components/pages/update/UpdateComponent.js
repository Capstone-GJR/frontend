import React from 'react';
import { axiosRequest } from '../../util/HelperFunctions';
import EditForm from '../../forms/EditForm';
import BottomNavbar from '../../navbar/BottomNavbar';
import SideNavbar from '../../navbar/SideNavbar';
import TopNavbar from '../../navbar/TopNavbar';
import LargeNavbar from '../../navbar/LargeNavbar';
import Button from "../../buttons/Button";

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
            <LargeNavbar pageName="All Spaces"/>
            <TopNavbar pageName="All Spaces"/>
            <SideNavbar/>

            <div className="pageContainer p-3 mt-5 me-lg-auto ms-lg-auto  pb-5 mb-5 mb-md-3 pb-md-3">
                <div>
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
                    width="w-50"
                />

            </div>
            <BottomNavbar/>
        </>
    )
}

export default UpdateComponent;
