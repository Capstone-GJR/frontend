import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link, useLocation} from 'react-router-dom';
import { axiosRequest} from '../../util/HelperFunctions';
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";
import UpdateItem from "../update/UpdateItem";

function AllItemsByToteId() {

    const [items, setItems] = useState([]);
    const [item, setItem] = useState([]);
    const [ShowSettings, setShowSettings] = useState(false);
    const location = useLocation();
    const endPoint = `/item/all/tote/${location.state.tote.id}`;

    const getAllItems = async () => {
        try {
            const res = await axiosRequest('GET', endPoint)
            setItems(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllItems();
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
                        <h1>{location.state.tote.name}</h1>
                        <Link 
                            to='/item/add' 
                            state={{ tote:location.state.tote }}
                        >
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