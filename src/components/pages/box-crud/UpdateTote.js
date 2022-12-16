import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import { axiosDelete, axiosPut } from '../../util/HelperFunctions';
import AddEditForm from '../../forms/AddEditForm';

function UpdateTote(props){
    const handleClick = async () => {
        const res = await axiosDelete(`/tote/${props.tote.id}/delete`);
        if (res.status === 204) {
          props.setShowSettings(false);
        } else {
          // need to handle error with message
          console.log(res);
        }
      };
    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <h1>Update Tote</h1>
            <p>{props.tote.name}</p>
            <AddEditForm
                request={axiosPut}
                url={`/tote/${props.tote.id}/edit`}
                setShowSettings={props.setShowSettings}
            />
            <button onClick={() => props.setShowSettings(false)}>
                Back to Totes
            </button>
            <button onClick={handleClick}>Delete</button>
            <BottomNavbar/>
        </div>

    )
}

export default UpdateTote;