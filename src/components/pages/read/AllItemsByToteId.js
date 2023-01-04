import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {axiosRequest} from '../../util/HelperFunctions';
import Button from "../../buttons/Button";
import UpdateComponent from '../update/UpdateComponent';
import Navbar from '../../ui/Navbar';

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
            setShowSettings: () => {
                setShowSettings()
            },
            userObject: {component},
            deleteUrl: `/item/delete/${component.id}`,
            putUrl: `/item/edit/${component.id}/${location.state.tote.id}`,
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
                <h2>{location.state.tote.name}</h2>
                <div className="text-center">
                    <Link
                        to='/addComponent'
                        state={{
                            stateObj: stateObj
                        }}
                    >
                        <Button title="ADD A ITEM"/>
                    </Link>
                </div>
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

export default AllItemsByToteId