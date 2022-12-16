import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import {AuthZHeader} from "../../util/HelperFunctions";
import Button from "../../buttons/Button";
import ConfirmBox from "../../buttons/ConfirmBox";

function ItemDetails(props) {

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
    }, [])

    return (
        <div>
            <LargeNavbar/>
            <TopNavbar/>
            <div className="pageContainer">
                <div className="pageContainer d-flex justify-content-center">
                    <h1 className="text-center mb-5">{location.state.item_name}</h1>
                    <div>
                        <div><img className="detailsImg" src={itemDetails.fileStackUrl} alt="image here"/>
                        </div>
                        <div className="h5 pt-2 text-center">Description: {itemDetails.keywords}</div>
                        <div className="h5 pt-2 text-center">Value: ${itemDetails.value}</div>
                        <div className="h5 pt-2 text-center">Location: {itemDetails.tote.name} inside
                            of {itemDetails.tote.space.name}</div>
                    </div>
                    <div>
                        {/*TODO: Have these buttons like to UpdateItem*/}
                        <Link to="/updateItem" state={{ itemDetails }}>
                            <Button title="EDIT ITEM" />
                        </Link>
                        <ConfirmBox
                            btnTitle="DELETE ITEM"
                            btnColor="#d9534f"
                            modalBody="Are you sure you want to delete this tote?"
                            comfirmBtnVariant="danger"
                            // confirmBtn={}
                        />
                    </div>

                </div>
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default ItemDetails