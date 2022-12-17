import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import AddForm from '../../forms/AddForm';
import { useLocation } from 'react-router-dom';

function AddTote() {
    const location = useLocation();
    const data = {
        navPath: '/allTotesBySpace',
        method: 'POST',
        url: `/tote/add/${location.state.space.id}`,
        space: location.state.space
    };
    
    return (
        <div>
            <LargeNavbar/>
            <TopNavbar/>
            <div className="pageContainer">
                <h1>Add Tote</h1>
                <AddForm data {...data}/>
            </div>
            <BottomNavbar/>
        </div>
    )
}

export default AddTote