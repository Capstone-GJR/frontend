import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {useLocation} from "react-router-dom";

function SpaceLanding(props){
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <TopNavbar/>
            <div>Space Landing</div>
            <div>space id: {location.state.space_id}</div>
            <BottomNavbar/>
        </div>

    )
}

export default SpaceLanding