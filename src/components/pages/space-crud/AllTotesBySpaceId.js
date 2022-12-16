import React, { useEffect, useState } from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link, useLocation} from "react-router-dom";
import axios from 'axios';
import { AuthZHeader } from '../../util/HelperFunctions';
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";

function AllTotesBySpaceId(){
    const [totes, setTotes] = useState([]);
    const location = useLocation();
    const endPoint = `/tote/all/${location.state.space_id}`;

    useEffect(() => {
        const getTotes = async () => {
            try {
                const response = await axios.get(endPoint, AuthZHeader())
                setTotes(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getTotes();
    },[])

    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <h1>{location.state.space_name}</h1>
            <div className="pageContainer" >
            <Link to='/tote/add'>
                <Button title="ADD A TOTE"/>
            </Link>
            <div>
                {totes.map((tote) => (
                    <Link to='/allItemsByToteId' state={{tote_id: `${tote.id}`, tote_name: `${tote.name}`}}>
                        <div
                            className='card w-50 p-4 m-4'
                            key={tote.id}>
                            {tote.name}
                        </div>
                    </Link>
                ))}
            </div>
            </div>
            <BottomNavbar/>
        </div>
    )
}

export default AllTotesBySpaceId;

// ADD item or tote btn //