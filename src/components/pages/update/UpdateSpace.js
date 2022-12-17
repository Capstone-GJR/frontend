import React from "react";
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import { axiosDelete, axiosPut, axiosRequest } from "../../util/HelperFunctions";
import AddEditForm from "../../forms/EditForm";
import SideNavbar from "../../navbar/SideNavbar";

function UpdateSpace(props) {

  const handleDeleteSubmit = async () => {
    try {
      const res = await axiosRequest('DELETE', `/space/delete/${props.space.id}`)
      // props.getUserSpaces();
      props.setShowSettings(false);
    } catch (error) {
      console.log(error);
    }
  }
  // Send object as props to AddEdit dynamic form
  const data = {
    space: props.space,
    request: axiosPut,
    url: `/space/edit/${props.space.id}`,
    setShowSettings: props.setShowSettings
  }

  return (
    <>
      <LargeNavbar pageName="Update Space"/>
      <TopNavbar pageName="Update Space"/>
      <SideNavbar/>
      <div className="pageContainer me-lg-3 ms-lg-auto pt-3 pb-5 mb-5 mt-5 mb-md-3 pb-md-3">

        <p>{props.space.name}</p>
        <p>{props.space.color}</p>
        <p>{props.space.keywords}</p>
        <p>{props.space.fileStackUrl}</p>
        <p>{props.space.id}</p>
        <AddEditForm data {...data}/>
        <button onClick={() => props.setShowSettings(false)}>
          Back to Spaces
        </button>
        <button onClick={handleDeleteSubmit}>Delete</button>
      </div>
      <BottomNavbar />
    </>
  );
}

export default UpdateSpace;
