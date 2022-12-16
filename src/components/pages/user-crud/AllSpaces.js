import axios from 'axios';
import {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link} from "react-router-dom";
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";
// import React from "@types/react";



function AllSpaces() {
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        const getUserSpaces = async () => {
            try {
                const response = await axios.get('/space/all', {
                    headers: {
                        Authorization: localStorage.getItem("access_token")
                    }
                })
                setSpaces(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUserSpaces();
    }, [])

    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <Link to="/space/add">
                <Button title="ADD A SPACE"/>
            </Link>
            <div>
                {spaces.map((space) => (
                    <Link to='/allTotesBySpace'
                        state={{
                            space_id: `${space.id}`,
                            space_name: `${space.name}`
                        }}
                    >
                        <div
                            className='card w-50 p-4 m-4'
                            key={space.id}
                        >{space.name}
                        </div>
                    </Link>
                ))}
            </div>
            <BottomNavbar/>
        </div>

    )
}

export default AllSpaces