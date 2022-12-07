import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function UpdateSpace(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Update Space</div>
            <BottomNavbar/>
        </div>

    )
}

export default UpdateSpace