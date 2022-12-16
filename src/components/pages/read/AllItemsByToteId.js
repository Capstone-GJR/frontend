import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {AuthZHeader} from '../../util/HelperFunctions';
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";
import UpdateItem from "../update/UpdateItem";
import SideNavbar from "../../navbar/SideNavbar";

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
            {ShowSettings ? <UpdateItem setShowSettings={setShowSettings} item={item}/>
                :
                <div>
                    <LargeNavbar pageName="All Items"/>
                    <TopNavbar pageName="All Items"/>
                    <SideNavbar/>
                    <h1 className="mt-5 pt-5">{location.state.tote_name}</h1>
                <div className="pageContainer mt-5 pt-5 mb-5 pb-5 me-lg-3 ms-lg-auto mb-md-0 mt-lg-3 pt-lg-3">

                    <Link to='/item/add' state={{
                        tote_id:location.state.tote_id
                    }}>
                        <Button title="ADD A ITEM"/>
                    </Link>
                    <div className="row">
                        {items.map((item) => (
                            <div className="card mt-4 p-2 w-50">
                                <Link to='/itemDetails' state={{item_id: `${item.id}`, item_name: `${item.name}`}}>
                                    <div className="pt-2 text-center">{item.name}</div>
                                    <div className='p-4 m-3' key={item.id}>
                                        <img className="detailsImg img-fluid" src={item.fileStackUrl} alt='image not available'/>
                                    </div>
                                </Link>
                                <Button onClick={()=> handleClick(item)} title={`EDIT: ` + item.name} />
                            </div>
                        ))}
                    </div>
                </div>
                    <BottomNavbar/>
                </div>
            }

        </div>

    )
}

export default AllItemsByToteId