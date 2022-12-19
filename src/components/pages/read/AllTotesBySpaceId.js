import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link, useLocation} from "react-router-dom";
import {axiosRequest} from '../../util/HelperFunctions';
import LargeNavbar from "../../navbar/LargeNavbar";
import UpdateTote from '../update/UpdateTote';
import Button from "../../buttons/Button";
import SideNavbar from "../../navbar/SideNavbar";

function AllTotesBySpaceId() {
    const [totes, setTotes] = useState([]);
    const [tote, setTote] = useState([]);
    const [ShowSettings, setShowSettings] = useState(false);
    const location = useLocation();

    const getAllTotes = async () => {
        try {
            console.log(location.state.space);
            console.log(location.state.space.id);
            const res = await axiosRequest('GET', `/tote/all/${location.state.space.id}`)
            setTotes(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllTotes();
    }, [ShowSettings])

    const handleEditClick = (tote) => {
        setTote(tote);
        setShowSettings(true);
    }

    if (ShowSettings) {
        return (
            <UpdateTote
                setShowSettings={setShowSettings}
                tote={tote}
            />
        )
    } else {
        return (
            <div>
                <LargeNavbar pageName="All Totes"/>
                <TopNavbar pageName="All Totes"/>
                <SideNavbar/>
                <h1 className="mt-5 pt-5">{location.state.space.name}</h1>
                <div className="pageContainer mt-5 pt-5 mb-5 pb-5 me-lg-3 ms-lg-auto mb-md-0 mt-lg-3 pt-lg-3">
                    <Link 
                        to='/tote/add' 
                        state={{ space:location.state.space }}
                    >
                        <Button title="ADD A TOTE"/>
                    </Link>
                    <div className="row">

                            {totes.map((tote) => (
                                <div className="card shadow-lg bg-body rounded p-3 mb-5 w-50 mt-4 p-2" key={tote.id}>
                                    <Link 
                                        to='/allItemsByToteId' 
                                        state={{ tote:tote }}
                                    >
                                        <div className="pt-2 text-center">{tote.name}</div>
                                        <div>
                                            <img className="detailsImg img-fluid" src={tote.fileStackUrl} alt='image not available'/>                                    </div>
                                    </Link>
                                    <Button onClick={()=> handleEditClick(tote)} title={'EDIT'} />
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