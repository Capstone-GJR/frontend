import React, {useEffect, useState} from 'react';
import AllView from "../../AllView";
import {useLocation} from "react-router-dom";

function AllTotesBySpaceId() {
    const location = useLocation();

    const locationStateObj = {
        componentType: 'tote',
        addUrl: `/tote/add/${location.state.space.id}`,
        space: location.state.space
    }

    return (
        <AllView
            componentType="space"
            axiosUrl={`/tote/all/${location.state.space.id}`}
            imgLinkTo="/allItemsByToteId"
            locationsStateObj={{locationStateObj}}

        />
    )


};
export default AllTotesBySpaceId;

// ADD item or tote btn //