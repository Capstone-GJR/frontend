import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import {useLocation} from "react-router-dom";
import AddForm from '../../forms/AddForm';

function AddItem(){
    const location = useLocation();
    const props = {
        component: 'item',
        url:`/item/add/${location.state.tote.id}`,
        tote: location.state.tote
    };

    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <div className="pageContainer" >
            <h1>Add Item</h1>
            <AddForm props {...props} />
            </div>
            <BottomNavbar/>
        </div>
    )
}

export default AddItem;