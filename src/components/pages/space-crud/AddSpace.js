import React from "react";
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import AddEditForm from "../../forms/AddEditForm";
import { axiosPost } from "../../util/HelperFunctions";

function AddSpace() {
  return (
    <div>
      <LargeNavbar />
      <TopNavbar />
      <div>Add Space</div>
      <AddEditForm 
        request={axiosPost} 
        url="/space/add" 
    />
      <BottomNavbar />
    </div>
  );
}

export default AddSpace;
