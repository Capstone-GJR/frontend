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

     // Object to pass using useLocation for adding a new item to dynamic add page/add form
     const stateObj = {
        componentType: 'item',
        addUrl: `/item/add/${location.state.tote.id}`,
        tote: location.state.tote
    }

    // set props object to pass data to updating details/page and update form
    const handleEditClick = (component) => {
        setProps({
            setShowSettings:()=> {setShowSettings()},
            userObject:{component},
            deleteUrl:`/item/delete/${component.id}`,
            putUrl:`/item/edit/${component.id}/${location.state.tote.id}`,
            backBtn: 'Back to Items',
            componentType:'item'
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
                <h1 className="mt-5 pt-2">{location.state.tote.name}</h1>
                <div className="pageContainer mb-4 pb-3 me-lg-auto ms-lg-auto mb-md-0 mt-lg-3 pt-lg-3">
                    <Link
                        className="mt-lg-2"
                        to='/addComponent' 
                        state={{ 
                            stateObj:stateObj 
                        }}
                    >
                        <Button title="ADD A ITEM"/>
                    </Link>
                    <div className="row">
                        {components.map((component) => (
                            <div className="w-50 card shadow bg-body rounded mb-5 mt-4 p-2" key={component.id}>
                               
                                <div className="pt-2 text-center">
                                    <p>{component.name}</p>
                                    <p>Value: ${component.value}</p>
                                    <p>Keywords: {component.keywords}</p>
                                </div>
                                <div>
                                    <img className="detailsImg img-fluid" src={component.fileStackUrl} alt='image not available'/>
                                </div>
                                <Button onClick={()=> handleEditClick(component)} title='EDIT ITEM' />
                                
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