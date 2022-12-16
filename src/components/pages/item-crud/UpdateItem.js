import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import {axiosDelete, axiosPut} from "../../util/HelperFunctions";
import AddEditForm from "../../forms/AddEditForm";

function UpdateItems(props){

    const handleClick = async () => {
        const res = await axiosDelete(`/item/delete/${props.item.id}`);
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
                <h1>Update Item</h1>
                <p>{props.item.name}</p>
                <p>{props.item.color}</p>
                <p>{props.item.keywords}</p>
                <p>{props.item.fileStackUrl}</p>
                <p>{props.item.id}</p>
            <AddEditForm
                request={axiosPut}
                url={`/item//edit/${props.item.id}/${props.item.tote.id}`}
                setShowSettings={props.setShowSettings}
            />
            <button onClick={() => props.setShowSettings(false)}>
                Back to Items
            </button>
            <button onClick={handleClick}>Delete</button>
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default UpdateItems