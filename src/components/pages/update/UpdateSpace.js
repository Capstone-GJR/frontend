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
      // New helper function accepts method, url, and optional data
      const res = await axiosRequest('DELETE', `/space/delete/${props.space.id}`)
      console.log(res);
      props.setShowSettings(false);
    } catch (error) {
      console.log(error);
    }
  }
  // Send object with userObj, axios url, and settings state as props so Edit form can be dynamic
  const data = {
    userObj: props.space,
    url: `/space/edit/${props.space.id}`,
    setShowSettings: props.setShowSettings,
  }

  return (
    <>
      <LargeNavbar pageName="Update Space"/>
      <TopNavbar pageName="Update Space"/>
      <SideNavbar/>
      <div className="pageContainer me-lg-3 ms-lg-auto pt-3 pb-5 mb-5 mt-5 mb-md-3 pb-md-3">
        {/* Space Details */}
        <h2>{props.space.name}</h2>
        <div className="d-flex align-items-center">
          <p className="m-0">Space color:</p>
          <div 
            style={{
              backgroundColor:props.space.color, 
              padding:25, 
              marginLeft:15
            }}>
          </div>
        </div>
        <p>Keywords: {props.space.keywords}</p>
        <p>Image</p>
        <img 
          style={{maxWidth:250}} 
          src={props.space.fileStackUrl
          }>
        </img>

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
