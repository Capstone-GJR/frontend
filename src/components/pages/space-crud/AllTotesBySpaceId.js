import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from 'axios';
import {AuthZHeader} from '../../util/HelperFunctions';
import LargeNavbar from "../../navbar/LargeNavbar";
import UpdateTote from '../box-crud/UpdateTote';
import Button from "../../buttons/Button";

function AllTotesBySpaceId() {
    const [totes, setTotes] = useState([]);
    const [tote, setTote] = useState([]);
    const [ShowSettings, setShowSettings] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
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
    }, [ShowSettings])

    const handleClick = (tote) => {
        setTote(tote);
        setShowSettings(true);
    }

    if (ShowSettings) {
        return (
            <UpdateTote
                setShowSettings={setShowSettings}
                tote={tote}
                // getUserSpaces={getUserSpaces}
            />
        )
    } else {
        return (
            <div>
                <LargeNavbar/>
                <TopNavbar/>
                <h1>{location.state.space_name}</h1>
                <div className="pageContainer">
                    <Link to='/tote/add' state={{
                        space_id:location.state.space_id
                    }}>
                        <Button title="ADD A TOTE"/>
                    </Link>
                    <div>
                        {totes.map((tote) => (
                            <div className="card">
                                <Link to='/allItemsByToteId' state={{tote_id: `${tote.id}`, tote_name: `${tote.name}`}}>
                                    <div
                                        className='card w-50 p-4 m-4'
                                        key={tote.id}>
                                        {tote.name}
                                    </div>
                                </Link>
                                <button onClick={() => handleClick(tote)}>Edit/Delete tote: {tote.name}</button>
                            </div>
                        ))}
                    </div>
                </div>
                <BottomNavbar/>
            </div>
        )
    }
}

export default AllTotesBySpaceId;

// ADD item or tote btn //