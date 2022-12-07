import React, { useEffect, useState } from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {useLocation} from "react-router-dom";
import axios from 'axios';
import { AuthZHeader } from '../../util/HelperFunctions';

function SpaceLanding(){
    const [totes, setTotes] = useState([]);
    const location = useLocation();
    const endPoint = `${location.state.space_id}/tote/all`;

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
            <TopNavbar/>
            <h1>{location.state.space_name}</h1>
            <div>
                {totes.map((tote) => (
                    // <Link to='/spaceLanding' state={{space_id: `${space.id}`}}>
                        <div
                            className='card w-50 p-4 m-4'
                            key={tote.id}>
                            {tote.name}
                        </div>
                    // </Link>
                ))}
            </div>
            <BottomNavbar/>
        </div>
    )
}

export default SpaceLanding;

// ADD item or tote btn //