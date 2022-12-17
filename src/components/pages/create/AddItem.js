import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
// import AddEditForm from "../../forms/AddEditForm";
import {axiosPost} from "../../util/HelperFunctions";
import {useLocation} from "react-router-dom";

function AddItem(){
    const location = useLocation();

    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <div className="pageContainer" >
            <h1>Add Item</h1>
            {/* <AddEditForm
                request={axiosPost}
                url={`/item/add/${location.state.tote.id}`}
            /> */}
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default AddItem