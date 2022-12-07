import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function AddItem(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Add Item</div>
            <BottomNavbar/>
        </div>

    )
}

export default AddItem