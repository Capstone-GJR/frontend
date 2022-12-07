import React from 'react'
import BottomNavbar from "../../navbar/BottomNavbar";

import TopNavbar from "../../navbar/TopNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function AboutUs() {
    return (
        <>
        <TopNavbar title="User"/>
        <LargeNavbar />
        <div>About Us</div>

        <BottomNavbar />
        </>

    )
}

export default AboutUs