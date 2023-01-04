import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { axiosRequest } from "../../util/HelperFunctions";
import Button from "../../buttons/Button";
import UpdateComponent from "../update/UpdateComponent";

function AllTotesBySpaceId() {
  const [components, setComponents] = useState([]);
  const [props, setProps] = useState({});
  const [ShowSettings, setShowSettings] = useState(false);
  const location = useLocation();

  const getAllTotes = async () => {
    try {
      const res = await axiosRequest(
        "GET",
        `/tote/all/${location.state.space.id}`
      );
      setComponents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTotes();
  }, [ShowSettings]);

  // Object to pass using useLocation for adding a new tote to dynamic add page/add form
  const stateObj = {
    componentType: "tote",
    addUrl: `/tote/add/${location.state.space.id}`,
    space: location.state.space,
  };

  // set props object to pass data to updating details/page and update form
  const handleEditClick = (component) => {
    setProps({
      setShowSettings: () => {
        setShowSettings();
      },
      userObject: { component },
      deleteUrl: `/tote/delete/${component.id}`,
      putUrl: `/tote/edit/${component.id}/${component.space.id}`,
      backBtn: "Back to Totes",
    });
    setShowSettings(true);
  };

  if (ShowSettings) {
    return <UpdateComponent props {...props} />;
  } else {
    return (
      <div className="pgContainer m-w-900">
        <h2>{location.state.space.name.toUpperCase()}</h2>
        <div className="text-center">
          <Link
            to="/addComponent"
            state={{
              stateObj: stateObj,
            }}
          >
            <Button title="ADD A TOTE" />
          </Link>
        </div>
        <div className="cardWrapper">
          {components.map((component) => (
            <div className="componentCard" key={component.id}>
              <h4>{component.name}</h4>
              <Link to="/allItemsByToteId" state={{ tote: component }}>
                <img src={component.fileStackUrl} alt="image not available" />
              </Link>
              <Button
                onClick={() => handleEditClick(component)}
                title="EDIT TOTE"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllTotesBySpaceId;

// ADD item or tote btn //
