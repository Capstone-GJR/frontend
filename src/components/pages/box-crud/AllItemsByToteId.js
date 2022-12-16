import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {AuthZHeader} from '../../util/HelperFunctions';
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";
import UpdateTote from "./UpdateTote";
import UpdateItem from "../item-crud/UpdateItem";

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
            <LargeNavbar/>
            <TopNavbar/>
            <h1>{location.state.tote_name}</h1>
            {ShowSettings ? <UpdateItem setShowSettings={setShowSettings} item={item}/>
                :
                <div className="pageContainer">
                    <Link to='/item/add'>
                        <Button title="ADD A ITEM"/>
                    </Link>
                    <div>
                        {items.map((item) => (
                            <div className="card">
                                <Link to='/itemDetails' state={{item_id: `${item.id}`, item_name: `${item.name}`}}>
                                    <div
                                        className='card w-50 p-4 m-4'
                                        key={item.id}>
                                        {item.name}
                                    </div>
                                </Link>
                                <button onClick={() => handleClick(item)}>Edit/Delete item: {item.name}</button>
                            </div>
                        ))}
                    </div>
                </div>
            }
            <BottomNavbar/>
        </div>

    )
}

export default AllItemsByToteId