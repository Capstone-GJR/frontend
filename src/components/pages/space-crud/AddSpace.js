import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function AddSpace(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Add Space</div>
            <BottomNavbar/>
        </div>

    )
}

export default AddSpace