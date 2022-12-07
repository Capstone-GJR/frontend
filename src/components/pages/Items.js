import React from 'react';
import TopNavbar from "../navbar/TopNavbar";
import BottomNavbar from "../navbar/BottomNavbar";
import LargeNavbar from "../navbar/LargeNavbar";

function Items(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Items</div>
            <BottomNavbar/>
        </div>

    )
}

export default Items