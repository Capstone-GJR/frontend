import axios from 'axios';
import {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link} from "react-router-dom";
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";
import SpaceSettings from '../space-crud/SpaceDetails';
// import React from "@types/react";
function AllSpaces() {
    const [spaces, setSpaces] = useState([]);
    const [space, setSpace] = useState({});
    const [ShowSettings, setShowSettings] = useState(false);

    useEffect(() => {
        const getUserSpaces = async () => {
            try {
                const response = await axios.get('/space/all', {
                    headers: {
                        Authorization: localStorage.getItem("access_token")
                    }
                })
                setSpaces(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUserSpaces();
    }, [])

    const handleClick = (space) => {
        setSpace(space);
        setShowSettings(true);
    }
    if (ShowSettings) {
        return (
            <SpaceSettings 
                showSettings={ShowSettings} 
                setShowSettings={setShowSettings}
                space={space}
                // getUserSpaces={getUserSpaces}
            />
        )
    } else {
        return (
            <div>
                <LargeNavbar />
                <TopNavbar/>
                <Link to="/space/add">
                    <Button title="Add"/>
                </Link>
                <div>
                    {spaces.map((space) => (
                        <div>
                            <Link to='/allTotesBySpace'
                                state={{
                                    space_id: `${space.id}`,
                                    space_name: `${space.name}`
                                }}>
                                <div
                                    className='card w-50 p-4 m-4'
                                    key={space.id}>
                                    {space.name}
                                </div>
                            </Link>
                            <button 
                                onClick={()=> handleClick(space)}>
                                Settings for id:  {space.id}
                            </button>
                        </div>
                    ))}
                </div>
                <BottomNavbar/>
            </div>
        )
    }
}
    

export default AllSpaces