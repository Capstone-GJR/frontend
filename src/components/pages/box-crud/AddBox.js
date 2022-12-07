import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function AddBox(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Add Box</div>
            <BottomNavbar/>
        </div>

    )
}

export default AddBox