import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import { axiosRequest } from '../../util/HelperFunctions';
import SideNavbar from "../../navbar/SideNavbar";
import EditForm from '../../forms/EditForm';

function UpdateTote(props){

    const handleDeleteClick = async () => {
        try {
            const res = await axiosRequest('DELETE', `/tote/delete/${props.tote.id}/`);
            console.log(res);
            props.setShowSettings(false);
        } catch (err) {
            console.log(err);
        }
    }
    
    const data = {
        userObj: props.tote,
        url:`/tote/edit/${props.tote.id}/${props.tote.space.id}`,
        setShowSettings: props.setShowSettings,
    };
      
    return (
        <>
            <LargeNavbar pageName="Update Tote" />
            <TopNavbar pageName="Update Tote"/>
            <SideNavbar/>
            {/*<div className="pt-3 pb-5 mb-5 mt-5 mb-md-3 pb-md-3">*/}
            <div className="pageContainer p-3 me-lg-3 ms-lg-auto  pb-5 mb-5 mb-md-3 pb-md-3">
            <div>
                <h2>{props.tote.name}</h2>
                <p>Keywords: {props.tote.keywords}</p>
            </div>
            
            <EditForm data {...data} />

            <button onClick={() => props.setShowSettings(false)}>
                Back to Totes
            </button>
            <button onClick={handleDeleteClick}>Delete</button>
            </div>
            <BottomNavbar/>
        </>

    )
}

export default UpdateTote;