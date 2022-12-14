import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import AddForm from "../../forms/AddForm";
import Button from "../../buttons/Button";
import filePicker from "../FilePicker";
import FilePicker from "../FilePicker";


function AddSpace(props){

    return (
        <div>
            <LargeNavbar />
            <FilePicker />
            <TopNavbar/>
            <div>Add Space</div>
            <AddForm/>
            <BottomNavbar/>
        </div>

    )
}

export default AddSpace