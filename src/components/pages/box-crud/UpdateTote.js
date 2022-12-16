import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function UpdateTote(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Update Tote</div>
            <BottomNavbar/>
        </div>

    )
}

export default UpdateTote