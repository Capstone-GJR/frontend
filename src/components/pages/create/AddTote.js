import React from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
// import AddEditForm from "../../forms/AddEditForm";
import {axiosPost} from "../../util/HelperFunctions";
import {useLocation} from 'react-router-dom';

function AddTote() {
    const location = useLocation();
    
    return (
        <div>
            <LargeNavbar/>
            <TopNavbar/>
            <div className="pageContainer">
                <h1>Add Tote</h1>
                {/* <AddEditForm
                    request={axiosPost}
                    url={`/tote/add/${location.state.space.id}`}
                /> */}
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default AddTote