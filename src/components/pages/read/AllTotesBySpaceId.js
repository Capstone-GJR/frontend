import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {axiosRequest} from '../../util/HelperFunctions';
import Button from "../../buttons/Button";
import UpdateComponent from '../update/UpdateComponent';
import Navbar from '../../ui/Navbar';

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
                <h1 className="mt-5 pt-2">{location.state.space.name}</h1>
                <div className="pageContainer mb-5 pb-5 me-lg-auto ms-lg-auto mb-md-0 mt-lg-3 pt-lg-3">
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
                                <div className="col-10 col-md-5 ms-auto me-auto card shadow bg-body rounded mb-5 mt-4 p-2" key={component.id}>
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
            </div>
        )
    }
}

export default AllTotesBySpaceId;

// ADD item or tote btn //