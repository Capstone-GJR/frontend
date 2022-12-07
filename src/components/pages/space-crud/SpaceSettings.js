import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function SpaceSettings(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Space Settings</div>
            <BottomNavbar/>
        </div>

    )
}

export default SpaceSettings