import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {axiosRequest} from '../../util/HelperFunctions';
import Button from "../../buttons/Button";
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
            <>
                <div className="pageContainer mb-4 pb-3 me-lg-auto ms-lg-auto mb-md-0 mt-lg-3 pt-lg-3">
                    <h1 className="mt-5 pt-2">{location.state.tote.name}</h1>
                    <Link
                        className="mt-lg-2"
                        to='/addComponent'
                        state={{
                            stateObj: stateObj
                        }}
                    >
                        <Button title="ADD A ITEM"/>
                    </Link>
                    <div className="row">
                        {components.map((component) => (
                            <div className="col-10 col-md-5 ms-auto me-auto card shadow bg-body rounded mb-5 mt-4 p-2" key={component.id}>

                                <div className="pt-2 text-center">
                                    <h5>{component.name}</h5>
                                </div>
                                <div className="pt-2">
                                    <img className="detailsImg img-fluid" src={component.fileStackUrl}
                                         alt='image not available'/>
                                </div>
                                <div className="pt-2 text-center">
                                    <p>Value: ${component.value}</p>
                                    <p>Keywords: {component.keywords}</p>
                                </div>

                                <Button onClick={() => handleEditClick(component)} title='EDIT ITEM'/>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default AllItemsByToteId