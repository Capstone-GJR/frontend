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
                <TopNavbar/>


                    {/*<h1 className="mt-5">All Spaces</h1>*/}


                <div id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white w-25 position-fixed">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-3 mt-5">
                            <Link to="/allSpaces" className="text-decoration-none text-black">
                                <CiBoxes size={20}/>
                                <p className="fs-6">Spaces</p>
                            </Link>
                            <Link to="/allItems" className="text-decoration-none text-black">
                                <CiShoppingTag size={20}/>
                                <p className="fs-6">Items</p>
                            </Link>
                            <Link to="/scan" className="text-decoration-none text-black">
                                <MdQrCodeScanner size={20}/>
                                <p className="fs-6">Scan</p>
                            </Link>
                            <Link to="/search" className="text-decoration-none text-black">
                                <CiSearch size={20}/>
                                <p className="fs-6">Search</p>
                            </Link>
                            <Link to="/profile" className="text-decoration-none text-black">
                                <CiUser size={20}/>
                                <p className="fs-6">Profile</p>
                            </Link>
                            <Link to="/logout" className="text-decoration-none text-black">
                                <CiUser size={20}/>
                                <p className="fs-6" onClick={() => localStorage.removeItem("access_token")}>
                                    Logout
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pageContainer mt-lg-5 pt-lg-5 mb-5 pb-5 me-lg-3 ms-lg-auto mb-md-0">
                <Link className="mt-lg-2" to="/space/add">
                    <Button title="ADD SPACE"/>
                </Link>
                <div className="row">
                    {spaces.map((space) => (
                        <div className="card w-50 mt-4 p-2 ">
                            <Link to='/allTotesBySpace'
                                state={{
                                    space_id: `${space.id}`,
                                    space_name: `${space.name}`
                                }}>
                                <div className="pt-2 text-center">{space.name}</div>
                                <div className='p-4 m-3' key={space.id}>
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