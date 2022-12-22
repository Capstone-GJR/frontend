import React from 'react'
import { useLocation } from 'react-router-dom';
import AddForm from '../../forms/AddForm';
import BottomNavbar from '../../navbar/BottomNavbar';
import LargeNavbar from '../../navbar/LargeNavbar';
import TopNavbar from '../../navbar/TopNavbar';
import SideNavbar from "../../navbar/SideNavbar";

const AddComponent = () => {
    const location = useLocation();
  return (
    <>
        <LargeNavbar/>
        <TopNavbar/>
        <SideNavbar/>
        <div className="pageContainer mb-5 pb-5 me-lg-auto ms-lg-auto mb-md-0 mt-3">
            <h1>Add {location.state.stateObj.componentType}</h1>
            <AddForm props {...location.state.stateObj}/>
        </div>
        <BottomNavbar/>
    </>
  )
}

export default AddComponent