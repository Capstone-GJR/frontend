import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import AddEditForm from "../../forms/SpaceToteAddEditForm";
import {axiosPost} from "../../util/HelperFunctions";
import {useLocation} from "react-router-dom";

function AddItem(props){
    const location = useLocation();
    console.log("tote id: ",location.state.tote_id);
    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <h1>Add Tote</h1>
            <AddEditForm
                request={axiosPost}
                url={`/item/add/${location.state.tote_id}`}
            />
            <BottomNavbar/>
        </div>

    )
}

export default AddItem