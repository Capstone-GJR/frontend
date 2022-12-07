import React from 'react';
import TopNavbar from "../navbar/TopNavbar";
import BottomNavbar from "../navbar/BottomNavbar";
import LargeNavbar from "../navbar/LargeNavbar";

function Search(props){
    return (
        <div>
            <LargeNavbar />

            <TopNavbar/>
            <div>Search</div>
            <BottomNavbar/>
        </div>

    )
}

export default Search