import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {AuthZHeader} from "../../util/HelperFunctions";

function ItemDetails(props){

    const [itemDetails, setItemDetails] = useState({});
    const [toteDetails, setToteDetails] = useState({});
    const [spaceDetails, setSpaceDetails] = useState({});
    const location = useLocation();
    const endPoint = `/item/${location.state.item_id}`;

    useEffect(() => {

        const getItemDetails = async () => {
            try {
                const response = await axios.get(endPoint, AuthZHeader())
                setItemDetails(response.data);
                setToteDetails(response.data.tote);
                console.log(response.data)
                console.log(response.data.tote)
                console.log(response.data.tote.space)
                setToteDetails(response.data.tote.space);
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
            <div className="pageContainer" >
            <h1>{location.state.item_name}</h1>
                <div>
                <div>
                    <img className="detailsImg" src={itemDetails.fileStackUrl} alt="image here"/>
                </div>
                <div>Description: {itemDetails.keywords}</div>
                <div>Value: ${itemDetails.value}</div>
                <div>Location: {toteDetails.name} inside of {spaceDetails.name}</div>
            </div>
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default ItemDetails