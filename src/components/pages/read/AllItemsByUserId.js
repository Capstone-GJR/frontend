import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {axiosRequest} from "../../util/HelperFunctions";
import UpdateComponent from "../update/UpdateComponent";
import Button from "../../buttons/Button";
import Navbar from '../../ui/Navbar';

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
    }, [ShowSettings])

    // set props object to pass data to updating details/page and update form
    const handleEditClick = (component) => {
        setProps({
            setShowSettings: () => {
                setShowSettings()
            },
            userObject: {component},
            deleteUrl: `/item/delete/${component.id}`,
            putUrl: `/item/edit/${component.id}/${component.tote.id}`,
            // FIXME: How do we get this button to return to the all items by user page, right now it returns to the all items in tote (of the tote it is in.
            backBtn: 'Back to Items',
            componentType: 'item'
        });
        setShowSettings(true);
    }


    if (ShowSettings) {
        return (
            <UpdateComponent props {...props} />
        )
    } else {
        return (

            <div className="pgContainer m-w-900">
                <h1>ALL ITEMS</h1>
                <div className="cardWrapper">
                    {components.map((component) => (
                        <div className="componentCard" key={component.id}>
                            <h4>{component.name}</h4>
                            <img src={component.fileStackUrl}
                                 alt='image not available'/>
                            <h5>Tote: {component.tote.name}
                                <br/>Space: {component.tote.space.name}</h5>
                            <Button onClick={() => handleEditClick(component)} title='EDIT ITEM'/>
                        </div>
                    ))}
                </div>
            </div>

        )
    }
}

export default AllItemsByUserId
