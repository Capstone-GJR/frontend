import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import { axiosDelete, axiosPut } from '../../util/HelperFunctions';
// import AddEditForm from '../../forms/AddEditForm';
import SideNavbar from "../../navbar/SideNavbar";

function UpdateTote(props){
    const handleClick = async () => {
        const res = await axiosDelete(`/tote/delete/${props.tote.id}/`);
        if (res.status === 204) {
          props.setShowSettings(false);
        } else {
          // need to handle error with message
          console.log(res);
        }
      };
    return (
        <div>
            <LargeNavbar pageName="Update Tote" />
            <TopNavbar pageName="Update Tote"/>
            <SideNavbar/>
            {/*<div className="pt-3 pb-5 mb-5 mt-5 mb-md-3 pb-md-3">*/}
            <div className="pageContainer p-3 me-lg-3 ms-lg-auto  pb-5 mb-5 mb-md-3 pb-md-3">

                <p>{props.tote.name}</p>
                <p>{props.tote.color}</p>
                <p>{props.tote.keywords}</p>
                <p>{props.tote.fileStackUrl}</p>
                <p>{props.tote.id}</p>
            {/* <AddEditForm
                request={axiosPut}
                url={`/tote/edit/${props.tote.id}/${props.tote.space.id}`}
                setShowSettings={props.setShowSettings}
            /> */}
            <button onClick={() => props.setShowSettings(false)}>
                Back to Totes
            </button>
            <button onClick={handleClick}>Delete</button>
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default UpdateTote;