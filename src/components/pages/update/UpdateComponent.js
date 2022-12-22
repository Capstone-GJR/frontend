import React from 'react';
import { axiosRequest } from '../../util/HelperFunctions';
import EditForm from '../../forms/EditForm';
import BottomNavbar from '../../navbar/BottomNavbar';
import SideNavbar from '../../navbar/SideNavbar';
import TopNavbar from '../../navbar/TopNavbar';
import LargeNavbar from '../../navbar/LargeNavbar';

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
            {/*<div className="pt-3 pb-5 mb-5 mt-5 mb-md-3 pb-md-3">*/}
            <div className="pageContainer p-3 me-lg-3 ms-lg-auto  pb-5 mb-5 mb-md-3 pb-md-3">
                <div>
                    <h2>{props.userObject.component.name}</h2>
                    <p>Keywords: {props.userObject.component.keywords}</p>
                </div>

                <EditForm props {...props} /> 

                <button 
                    onClick={() => props.setShowSettings(false)}>
                    {props.backBtn}
                </button>
                <button 
                    onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
            <BottomNavbar/>
        </>
    )
}

export default UpdateComponent;