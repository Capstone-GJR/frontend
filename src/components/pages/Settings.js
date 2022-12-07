import React from 'react';
import TopNavbar from "../navbar/TopNavbar";
import BottomNavbar from "../navbar/BottomNavbar";
import LargeNavbar from "../navbar/LargeNavbar";

function Settings(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>settings</div>
            <BottomNavbar/>
        </div>

    )
}

export default Settings