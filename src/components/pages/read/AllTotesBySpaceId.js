import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link, useLocation} from "react-router-dom";
import {axiosRequest} from '../../util/HelperFunctions';
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";
import SideNavbar from "../../navbar/SideNavbar";
import UpdateComponent from '../update/UpdateComponent';

function AllTotesBySpaceId() {

    const [components, setComponents] = useState([]);
    const [props, setProps] = useState({});
    const [ShowSettings, setShowSettings] = useState(false);
    const location = useLocation();

    const getAllTotes = async () => {
        try {
            const res = await axiosRequest(
                'GET', `/tote/all/${location.state.space.id}`
            )
            setComponents(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllTotes();
    }, [ShowSettings])

     // Object to pass using useLocation for adding a new tote to dynamic add page/add form
     const stateObj = {
        componentType: 'tote',
        addUrl: `/tote/add/${location.state.space.id}`,
        space: location.state.space
    }

    // set props object to pass data to updating details/page and update form
    const handleEditClick = (component) => {
        setProps({
            setShowSettings:()=> {setShowSettings()},
            userObject:{component},
            deleteUrl:`/tote/delete/${component.id}`,
            putUrl:`/tote/edit/${component.id}/${component.space.id}`,
            backBtn: 'Back to Totes'
        });
        setShowSettings(true);
    }

    if (ShowSettings) {
        return (
            <UpdateComponent props {...props} />
        )
    } else {
        return (
            <div>
                <LargeNavbar pageName="All Totes"/>
                <TopNavbar pageName="All Totes"/>
                <SideNavbar/>
                <h1 className="mt-5 pt-2">{location.state.space.name}</h1>
                <div className="pageContainer mt-5 pt-5 mb-5 pb-5 me-lg-3 ms-lg-auto mb-md-0 mt-lg-3 pt-lg-3">
                    <Link
                        className="mt-lg-2"
                        to='/addComponent' 
                        state={{ 
                            stateObj:stateObj 
                        }}
                    >
                        <Button title="ADD A TOTE"/>
                    </Link>
                    <div className="row">

                            {components.map((component) => (
                                <div className="w-50 card shadow bg-body rounded mb-5 mt-4 p-1" key={component.id}>
                                    <Link 
                                        to='/allItemsByToteId' 
                                        state={{ tote:component }}
                                    >
                                        <div className="pt-2 text-center">
                                            {component.name}
                                        </div>
                                        <div>
                                            <img className="detailsImg img-fluid" src={component.fileStackUrl} alt='image not available'/>
                                        </div>
                                    </Link>
                                    <Button onClick={()=> handleEditClick(component)} title='EDIT TOTE' />
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