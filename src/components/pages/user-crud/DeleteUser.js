import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function DeleteUser(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Delete User</div>
            <BottomNavbar/>
        </div>

    )
}

export default DeleteUser