import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import { axiosDelete, axiosPut } from '../../util/HelperFunctions';
import AddEditForm from '../../forms/AddEditForm';

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
            <LargeNavbar />
            <TopNavbar/>
            <div className="p-3">
                <h1>Update Tote</h1>
                <p>{props.tote.name}</p>
                <p>{props.tote.color}</p>
                <p>{props.tote.keywords}</p>
                <p>{props.tote.fileStackUrl}</p>
                <p>{props.tote.id}</p>
            <AddEditForm
                request={axiosPut}
                url={`/tote/edit/${props.tote.id}/${props.tote.space.id}`}
                setShowSettings={props.setShowSettings}
            />
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