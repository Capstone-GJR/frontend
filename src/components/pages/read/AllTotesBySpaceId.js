import React, {useEffect, useState} from 'react';
import AllView from "../../AllView";
import {useLocation} from "react-router-dom";

function AllTotesBySpaceId() {
    const location = useLocation();

    return (
        <AllView
            componentType="space"
            axiosUrl={`/tote/all/${location.state.space.id}`}
            imgLinkTo="/allItemsByToteId"
        />
    )


};
export default AllTotesBySpaceId;

// ADD item or tote btn //