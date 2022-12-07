import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function UpdateItems(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Update Items</div>
            <BottomNavbar/>
        </div>

    )
}

export default UpdateItems