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
                <h1 className="mt-5 pt-5">{location.state.tote.name}</h1>
                <div className="pageContainer mt-5 pt-5 mb-5 pb-5 me-lg-3 ms-lg-auto mb-md-0 mt-lg-3 pt-lg-3">
                    <Link 
                        to='/addComponent' 
                        state={{ 
                            stateObj:stateObj 
                        }}
                    >
                        <Button title="ADD A ITEM"/>
                    </Link>
                    <div className="row">
                        {components.map((component) => (
                            <div className="card shadow-lg bg-body rounded p-3 mb-5 w-50 mt-4 p-2" key={component.id}>
                               
                                <div className="pt-2 text-center">
                                    <p>{component.name}</p>
                                    <p>Value: ${component.value}</p>
                                    <p>Keywords: {component.keywords}</p>
                                    {component.checkedOut ? <p>Checked Out: YES</p> : <p>Checked Out: No</p>}
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