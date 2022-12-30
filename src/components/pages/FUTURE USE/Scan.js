import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import SideNavbar from "../../navbar/SideNavbar";

function Scan(props){
    return (
        <div>
            <LargeNavbar pageName="Scan"/>
            <TopNavbar pageName="Scan"/>
            <SideNavbar/>

            <div className="pageContainer mt-4 pt-5 mb-5 pb-5 me-lg-auto ms-lg-auto mb-md-0 text-center">
                <h1>Feature coming soon!</h1>
                <h3 className="mb-5">Please check back soon!</h3>
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default Scan