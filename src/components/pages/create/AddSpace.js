import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import AddForm from '../../forms/AddForm';

function AddSpace() {
    const data = {
        navPath: '/allSpaces',
        method: 'POST',
        url: '/space/add',
    };

    return (
        <div>
            <LargeNavbar/>
            <TopNavbar/>
            <div className="pageContainer">
                <h1>Add Space</h1>
                <AddForm data {...data}/>
            </div>
            <BottomNavbar/>
        </div>
    );
}

export default AddSpace;
