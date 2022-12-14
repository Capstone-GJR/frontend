import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import AddForm from "../../forms/AddForm";
import FilePicker from "../FilePicker";
import Button from "react-bootstrap/Button";


function AddSpace(props){

    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            {/*<FilePicker />*/}
            <Button title='PICKER' onClick={()=><FilePicker/>}/>
            <div>Add Space</div>
            <AddForm/>
            <BottomNavbar/>
        </div>

    )
}

export default AddSpace