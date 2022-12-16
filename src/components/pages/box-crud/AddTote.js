import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import AddEditForm from "../../forms/AddEditForm";
import { axiosPost } from "../../util/HelperFunctions";
import { useLocation } from 'react-router-dom';

function AddTote(){
    const location = useLocation();
    console.log("space id: ",location.state.space_id);
    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <h1>Add Tote</h1>
            <AddEditForm
                request={axiosPost} 
                url={`/tote/add/${location.state.space_id}`}
            />
            <BottomNavbar/>
        </div>

    )
}

export default AddTote