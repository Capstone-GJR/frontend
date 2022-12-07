import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function UserSettings(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Delete Box</div>
            <BottomNavbar/>
        </div>

    )
}

export default UserSettings