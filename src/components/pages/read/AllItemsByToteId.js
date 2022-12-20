import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link, useLocation} from 'react-router-dom';
import { axiosRequest} from '../../util/HelperFunctions';
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";
import SideNavbar from '../../navbar/SideNavbar';
import UpdateComponent from '../update/UpdateComponent';

function AllItemsByToteId() {

    const [components, setComponents] = useState([]);
    const [props, setProps] = useState([]);
    const [ShowSettings, setShowSettings] = useState(false);
    const location = useLocation();

    const getAllItems = async () => {
        try {
            const res = await axiosRequest(
                'GET', `/item/all/tote/${location.state.tote.id}`
            )
            setComponents(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllItems();
    }, [ShowSettings])

    const handleEditClick = (component) => {
        setProps({
            setShowSettings:()=> {setShowSettings()},
            userObject:{component},
        });
        setShowSettings(true);
    }

    if (ShowSettings) {
        return (
            <UpdateComponent props {...props} />
        )
    } else {
        return (
            <>
               <LargeNavbar pageName="All Items"/>
                <TopNavbar pageName="All Items"/>
                <SideNavbar/>
                <h1 className="mt-5 pt-5">{location.state.tote.name}</h1>
                <div className="pageContainer mt-5 pt-5 mb-5 pb-5 me-lg-3 ms-lg-auto mb-md-0 mt-lg-3 pt-lg-3">
                    <Link 
                        to='/item/add' 
                        state={{ tote:location.state.tote }}
                    >
                        <Button title="ADD A ITEM"/>
                    </Link>
                    <div className="row">

                            {components.map((component) => (
                                <div className="card shadow-lg bg-body rounded p-3 mb-5 w-50 mt-4 p-2" key={component.id}>
                                    <Link 
                                        to='/allItemsByToteId' 
                                        state={{ tote:component }}
                                    >
                                        <div className="pt-2 text-center">{component.name}</div>
                                        <div>
                                            <img className="detailsImg img-fluid" src={component.fileStackUrl} alt='image not available'/>                                    </div>
                                    </Link>
                                    <Button onClick={()=> handleEditClick(component)} title='EDIT TOTE' />
                                </div>
                            ))}
                    </div>
                </div>
                <BottomNavbar/> 
            </>
    
        )
    }
    
}

export default AllItemsByToteId