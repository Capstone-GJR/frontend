import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import AddForm from "../../forms/AddForm";
import Button from "../../buttons/Button";


function AddSpace(props){

    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <div>Add Space</div>
            <AddForm/>
            <BottomNavbar/>
        </div>

    )
}

export default AddSpace