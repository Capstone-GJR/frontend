import React from 'react'
import { useLocation } from 'react-router-dom';
import AddForm from '../../forms/AddForm';
import BottomNavbar from '../../navbar/BottomNavbar';
import LargeNavbar from '../../navbar/LargeNavbar';
import TopNavbar from '../../navbar/TopNavbar';

const AddComponent = () => {
    const location = useLocation();
    console.log(location.state.stateObj);
  return (
    <>
        <LargeNavbar/>
        <TopNavbar/>
        <div className="pageContainer">
            <h1>Add {location.state.stateObj.componentType}</h1>
            <AddForm props {...location.state.stateObj}/>
        </div>
        <BottomNavbar/>
    </>
  )
}

export default AddComponent