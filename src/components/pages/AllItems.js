import React from 'react';
import TopNavbar from "../navbar/TopNavbar";
import BottomNavbar from "../navbar/BottomNavbar";
import LargeNavbar from "../navbar/LargeNavbar";

function AllItems(props){


    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <div>Items</div>
            <BottomNavbar/>
        </div>

    )
}

export default AllItems