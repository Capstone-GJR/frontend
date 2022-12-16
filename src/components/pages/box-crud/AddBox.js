import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function AddBox(props){
    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <div className="pageContainer" >
            <div>Add Box</div>
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default AddBox