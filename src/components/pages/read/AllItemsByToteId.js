import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {AuthZHeader} from '../../util/HelperFunctions';
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";
import UpdateItem from "../update/UpdateItem";

function AllItemsByToteId() {

    const [items, setItems] = useState([]);
    const [item, setItem] = useState([]);
    const [ShowSettings, setShowSettings] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const endPoint = `/item/all/tote/${location.state.tote_id}`;

    const getItems = async () => {
        try {
            const response = await axios.get(endPoint, AuthZHeader())
            setItems(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getItems();
    }, [ShowSettings])

    const handleClick = (tote) => {
        setItem(tote);
        setShowSettings(true);
    }


    return (


        <div>
            {ShowSettings
                ? <UpdateItem setShowSettings={setShowSettings} item={item}/> :
                <div>
                    <LargeNavbar/>
                    <TopNavbar/>
                    <div className="pageContainer">
                        <h1>{location.state.tote_name}</h1>
                        <Link to='/item/add' state={{
                            tote_id:location.state.tote_id
                        }}>
                            <Button title="ADD A ITEM"/>
                        </Link>
                    <div className="row">
                            {items.map((item) => (
                                <div className="shadow bg-body rounded p-3 mb-5 card mt-4 p-2 w-50">
                                        {/*-----*/}
                                        <div onClick={() => handleClick(item)}>
                                            <div className="pt-2 text-center">{item.name}</div>
                                    <div key={item.id}>
                                        <img className="detailsImg img-fluid" src={item.fileStackUrl} alt='image not available'/>
                                            </div>
                                        </div>
                                        {/*    ----*/}
                                    <Button onClick={() => handleClick(item)} title="VIEW DETAILS"/>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            }

        </div>

    )
}

export default AllItemsByToteId