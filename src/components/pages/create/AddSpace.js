import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import AddEditForm from "../../forms/AddEditForm";
import {axiosPost} from "../../util/HelperFunctions";

function AddSpace() {
    return (
        <div>
            <LargeNavbar/>
            <TopNavbar/>
            <div className="pageContainer">
                <h1>Add Space</h1>
                <AddEditForm
                    request={axiosPost}
                    url="/space/add"
                />
            </div>
            <BottomNavbar/>
        </div>
    );
}

export default AddSpace;
