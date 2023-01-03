import React from 'react'
import { useLocation } from 'react-router-dom';
import AddForm from '../../forms/AddForm';

const AddComponent = () => {
    const location = useLocation();
  return (
    <>
        <div className="pageContainer mb-5 pb-5 me-lg-auto ms-lg-auto mb-md-0 mt-3">
            <h1>Add {location.state.stateObj.componentType}</h1>
            <AddForm props {...location.state.stateObj}/>
        </div>
    </>
  )
}

export default AddComponent