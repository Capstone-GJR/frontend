import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";

function Search(props){
    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <h1>SEARCH</h1>
            <div className="pageContainer text-center">
                <h1>Feature coming soon!</h1>
                <h3 className="mb-5">Please check back soon!</h3>
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default Search