import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import {AuthZHeader, axiosRequest} from "../../util/HelperFunctions";
import SideNavbar from "../../navbar/SideNavbar";

function AllItemsByUserId(props) {

    const [items, setItems] = useState([]);
    const location = useLocation();
    const endPoint = `/item/all`;

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await axiosRequest('GET',`/item/all`)
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
            <LargeNavbar pageName="All Items"/>
            <TopNavbar pageName="All Items"/>
            <SideNavbar/>


            <div className="pageContainer mb-4 pb-3 me-lg-auto ms-lg-auto mb-md-0 mt-lg-3 pt-lg-3">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="row">
                    {items.map((item) => (
                        <div className="w-50 card shadow bg-body rounded mb-5 mt-4 p-2">
                            <Link to='/itemDetails' state={{item_id: `${item.id}`, item_name: `${item.name}`}}>
                                <div className="pt-2 text-center">{item.name}</div>
                                <div className='p-4 m-3' key={item.id}>
                                    <img className="detailsImg img-fluid" src={item.fileStackUrl} alt='image not available'/>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default AllItemsByUserId

//TODO: Double check backend SQL statement