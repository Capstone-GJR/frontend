import React, {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import {AuthZHeader, axiosRequest} from "../../util/HelperFunctions";
import SideNavbar from "../../navbar/SideNavbar";
import UpdateComponent from "../update/UpdateComponent";
import Button from "../../buttons/Button";

function AllItemsByUserId() {

    const [components, setComponents] = useState([]);
    const [ShowSettings, setShowSettings] = useState(false);
    const [props, setProps] = useState([]);
    const location = useLocation();

    const getItems = async () => {
        try {
            const res = await axiosRequest('GET', `/item/all`)
            setComponents(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getItems();
    }, [])

    // set props object to pass data to updating details/page and update form
    const handleEditClick = (component) => {
        setProps({
            setShowSettings:()=> {setShowSettings()},
            userObject:{component},
            deleteUrl:`/item/delete/${component.id}`,
            putUrl:`/item/edit/${component.id}/${component.tote.id}`,
            // FIXME: How do we get this button to return to the all items by user page, right now it returns to the all items in tote (of the tote it is in.
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
                <div className="pageContainer mb-4 pb-3 me-lg-auto ms-lg-auto mb-md-0 mt-lg-3 pt-lg-3">
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

export default AllItemsByUserId
