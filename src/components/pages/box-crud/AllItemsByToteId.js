import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import {AuthZHeader} from '../../util/HelperFunctions';
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";

function AllItemsByToteId() {

    const [items, setItems] = useState([]);
    const location = useLocation();
    const endPoint = `/item/all/tote/${location.state.tote_id}`;

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await axios.get(endPoint, AuthZHeader())
                setItems(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getItems();
    }, [])

    return (
        <div>
            <LargeNavbar/>
            <TopNavbar/>
            <h1>{location.state.tote_name}</h1>
            <Link to="/item/add"
                  state={{
                      tote_id:location.state.tote_id
                  }}
            >
                <Button title="ADD AN ITEM"/>
            </Link>
            <div>
                {items.map((item) => (
                    <Link to='/itemDetails' state={{item_id: `${item.id}`, item_name: `${item.name}`}}>
                        <div
                            className='card w-50 p-4 m-4'
                            key={item.id}>
                            {item.name}
                        </div>
                    </Link>
                ))}
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default AllItemsByToteId