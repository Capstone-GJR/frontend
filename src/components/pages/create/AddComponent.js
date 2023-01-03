import React from 'react'
import { useLocation } from 'react-router-dom';
import AddForm from '../../forms/AddForm';
import Navbar from '../../ui/Navbar';


const AddComponent = () => {
    const location = useLocation();
  return (
        <div className="pgContainer maxWidth600">
            <h1>Add {location.state.stateObj.componentType}</h1>
            <AddForm props {...location.state.stateObj}/>
        </div>
  )
}

export default AddComponent