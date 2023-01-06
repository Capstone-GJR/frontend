import React from "react";
import { useLocation } from "react-router-dom";
import AddForm from "../../forms/AddForm";

const AddComponent = () => {
  const location = useLocation();

  return (
    <div className="pgContainer m-w-600">
      <h1>Add</h1>
      <AddForm props {...location.state.stateObj} />
    </div>
  );
};

export default AddComponent;
