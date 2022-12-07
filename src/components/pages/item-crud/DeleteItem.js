import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function DeleteItem(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Delete Item</div>
            <BottomNavbar/>
        </div>

    )
}

export default DeleteItem