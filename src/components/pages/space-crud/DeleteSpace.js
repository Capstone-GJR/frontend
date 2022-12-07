import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function DeleteSpace(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Delete Space</div>
            <BottomNavbar/>
        </div>

    )
}

export default DeleteSpace