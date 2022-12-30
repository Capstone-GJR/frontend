import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import SideNavbar from "../../navbar/SideNavbar";
import SearchBar from "../../forms/SearchBar";

function Search(props){
    return (
        <div>
            <LargeNavbar pageName="Search"/>
            <TopNavbar/>
            <SideNavbar/>
            <div className="pageContainer text-center">
                <h1>Search for an item by Keyword</h1>
                <SearchBar />
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default Search