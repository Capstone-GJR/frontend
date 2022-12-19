import React from "react";
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import { axiosRequest } from "../../util/HelperFunctions";
import SideNavbar from "../../navbar/SideNavbar";
import EditForm from "../../forms/EditForm";

function UpdateSpace(props) {

  const handleDeleteSubmit = async () => {
    try {
      const res = await axiosRequest('DELETE', `/space/delete/${props.space.id}`)
      console.log(res);
      props.setShowSettings(false);
    } catch (error) {
      console.log(error);
    }
  }
  // Send object as props to dynamic Edit form
  const data = {
    space: props.space,
    url: `/space/edit/${props.space.id}`,
    setShowSettings: props.setShowSettings,
    userObj: props.space
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
        <EditForm data {...data}/>
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
