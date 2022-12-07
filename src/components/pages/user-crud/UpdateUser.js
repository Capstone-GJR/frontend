import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function UpdateUser(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Update User</div>
            <BottomNavbar/>
        </div>

    )
}

export default UpdateUser