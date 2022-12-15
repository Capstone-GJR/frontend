import React, { useEffect, useState } from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link, useLocation} from "react-router-dom";
import axios from 'axios';
import { AuthZHeader } from '../../util/HelperFunctions';
import LargeNavbar from "../../navbar/LargeNavbar";

function AllTotesBySpaceId(){
    const [totes, setTotes] = useState([]);
    const [tote, setTote] = useState([]);
    const location = useLocation();
    const endPoint = `/tote/all/${location.state.space_id}`;

    const getTotes = async () => {
        try {
            const response = await axios.get(endPoint, AuthZHeader())
            setTotes(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTotes();
    },[])

    const handleClick = (tote) => {
        setTote(tote);
        console.log(tote);
    }

    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <h1>{location.state.space_name}</h1>
            <div>
                {totes.map((tote) => (
                    <div>
                        <Link to='/toteLanding' state={{tote_id: `${tote.id}`, tote_name: `${tote.name}`}}>
                            <div
                                className='card w-50 p-4 m-4'
                                key={tote.id}>
                                {tote.name}
                            </div>
                        </Link>
                        <button onClick={()=> handleClick(tote)}>Edit/Delete tote</button>
                    </div>
                ))}
            </div>
            <BottomNavbar/>
        </div>
    )
}

export default AllTotesBySpaceId;

// ADD item or tote btn //