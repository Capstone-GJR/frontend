import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import {axiosDelete, axiosPut} from "../../util/HelperFunctions";
import AddEditForm from "../../forms/AddEditForm";

function UpdateItems(props){

    const handleClick = async () => {
        const res = await axiosDelete(`/item/${props.item.id}/delete`);
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
            <h1>Update Items</h1>
            <AddEditForm
                request={axiosPut}
                url={`/tote/${props.item.id}/edit`}
                setShowSettings={props.setShowSettings}
            />
            <button onClick={() => props.setShowSettings(false)}>
                Back to Items
            </button>
            <button onClick={handleClick}>Delete</button>
            <BottomNavbar/>
        </div>

    )
}

export default UpdateItems