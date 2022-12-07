import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function ItemLanding(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Item Landing</div>
            <BottomNavbar/>
        </div>

    )
}

export default ItemLanding