import axios from 'axios';
import {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link} from "react-router-dom";
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";
import UpdateSpace from '../update/UpdateSpace';
import { AuthZHeader } from '../../util/HelperFunctions';
import {CiBoxes, CiSearch, CiShoppingTag, CiUser} from "react-icons/ci";
// import React from "@types/react";
import {MdQrCodeScanner} from "react-icons/md";
import SideNavbar from "../../navbar/SideNavbar";

function AllSpaces() {

    const [spaces, setSpaces] = useState([]);
    const [space, setSpace] = useState({});
    const [ShowSettings, setShowSettings] = useState(false);

    const getUserSpaces = async () => {
        try {
            const response = await axios.get('/space/all', AuthZHeader())
            setSpaces(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserSpaces();
    }, [ShowSettings])

    const handleClick = (space) => {
        setSpace(space);
        setShowSettings(true);
    }

    if (ShowSettings) {
        return (
            <UpdateSpace
                setShowSettings={setShowSettings}
                space={space}
                getUserSpaces={getUserSpaces}
            />
        )
    } else {
        return (
            <div>
                <LargeNavbar pageName="All Spaces"/>
                <TopNavbar pageName="All Spaces"/>
                <SideNavbar/>


                    {/*<h1 className="mt-5">All Spaces</h1>*/}

                <div className="pageContainer mt-5 pt-5 mb-5 pb-5 me-lg-3 ms-lg-auto mb-md-0">
                <Link className="mt-lg-2" to="/space/add">
                    <Button title="ADD SPACE"/>
                </Link>
                <div className="row ">
                    {spaces.map((space) => (
                        <div className="col-5 card shadow bg-body rounded p-3 ms-4 me-4 mb-5 mt-4 p-2 ">
                            <Link to='/allTotesBySpace'
                                state={{
                                    space_id: `${space.id}`,
                                    space_name: `${space.name}`
                                }}>
                                <div className="pt-2 text-center">{space.name}</div>
                                <div  key={space.id}>
                                    {/*TODO: Adjust the image to be mobile responsive with card*/}
                                    <img className="detailsImg img-fluid" src={space.fileStackUrl} alt='image not available'/>
                                </div>
                            </Link>
                            <Button onClick={()=> handleClick(space)} title={`EDIT: ` + space.name} />

                        </div>
                    ))}
                </div>
                </div>
                <BottomNavbar/>
            </div>
        )
    }
}
export default AllSpaces