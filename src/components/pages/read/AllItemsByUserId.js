import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import {AuthZHeader} from "../../util/HelperFunctions";

function AllItemsByUserId(props) {

    const [items, setItems] = useState([]);
    const location = useLocation();
    const endPoint = `/item/all`;

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
            <div className="pageContainer mt-5 pt-5 mb-5 pb-5 me-lg-3 ms-lg-auto mb-md-0">
                <h1>ALL ITEMS </h1>
                <div className="card mt-4 p-2 w-70">
                {items.map((item) => (
                    <Link to='/itemDetails' state={{item_id: `${item.id}`, item_name: `${item.name}`}}>
                        <div className="pt-2 text-center">{item.name}</div>
                        <div className='p-4 m-3' key={item.id}>
                            <img className="detailsImg" src={item.fileStackUrl} alt='image not available'/>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default AllItemsByUserId

//TODO: Double check backend SQL statement