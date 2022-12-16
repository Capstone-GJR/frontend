import React from "react";
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import { axiosDelete, axiosPut } from "../../util/HelperFunctions";
import AddEditForm from "../../forms/AddEditForm";
import SideNavbar from "../../navbar/SideNavbar";

function UpdateSpace(props) {
  const handleClick = async () => {
    const res = await axiosDelete(`/space/delete/${props.space.id}`);
    if (res.status === 204) {
      props.getUserSpaces();
      props.setShowSettings(false);
    } else {
      // need to handle error with message
      console.log(res);
    }
  };

  return (
    <>
      <LargeNavbar pageName="Update Space"/>
      <TopNavbar pageName="Update Space"/>
      <SideNavbar/>
      <div className="p-3">

        <p>{props.space.name}</p>
        <p>{props.space.color}</p>
        <p>{props.space.keywords}</p>
        <p>{props.space.fileStackUrl}</p>
        <p>{props.space.id}</p>
        <AddEditForm
          request={axiosPut}
          url={`/space/edit/${props.space.id}`}
          setShowSettings={props.setShowSettings}
        />
        <button onClick={() => props.setShowSettings(false)}>
          Back to Spaces
        </button>
        <button onClick={handleClick}>Delete</button>
      </div>
      <BottomNavbar />
    </>
  );
}

export default UpdateSpace;
