import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {AuthZHeader} from "../../util/HelperFunctions";

function ItemLanding(props){

    const [itemDetails, setItemDetails] = useState({});
    const location = useLocation();
    const endPoint = `/item/${location.state.item_id}`;

    useEffect(() => {

        const getItemDetails = async () => {
            try {
                const response = await axios.get(endPoint, AuthZHeader())
                setItemDetails(response.data);
                console.log(response.data);
                console.log(response.data.space.name)
                console.log(response.data.tote.name)
            } catch (error) {
                console.log(error);
            }
        }
        getItemDetails();
    },[])

    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <h1>{location.state.item_name}</h1>
            <div>
                <div>Description: {itemDetails.keywords}</div>
                <div>Value: ${itemDetails.value}</div>
                {/*<div>Space: {itemDetails.space.name}</div>*/}
                {/*<div>Tote: {itemDetails.tote.name}</div>*/}
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default ItemLanding