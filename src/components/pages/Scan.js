import React from 'react';
import TopNavbar from "../navbar/TopNavbar";
import BottomNavbar from "../navbar/BottomNavbar";
import LargeNavbar from "../navbar/LargeNavbar";

function Scan(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Scan</div>
            <BottomNavbar/>
        </div>

    )
}

export default Scan