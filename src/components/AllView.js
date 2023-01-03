import {Link} from "react-router-dom";
import Button from "./buttons/Button";
import React, {useEffect, useState} from "react";
import {axiosRequest} from "./util/HelperFunctions";
import UpdateComponent from "./pages/update/UpdateComponent";

const AllView = props => {
    const [components, setComponents] = useState([]);
    const [updateProps, setUpdateProps] = useState({});
    const [ShowSettings, setShowSettings] = useState(false);
    const componentType = props.componentType
    const componentTypeUC = componentType.toUpperCase()


    const getAll = async () => {
        try {
            const res = await axiosRequest('GET', `${props.axiosUrl}`);
            setComponents(res.data);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAll();
    }, [ShowSettings])

    // Object to pass using useLocation for adding a new space to dynamic add page/add form
    // const stateObj = {
    //     componentType: `${componentType}`,
    //     addUrl: `/${componentType}/add`,
    // `${componentType}`: `${location.state.componentType}`
    // }

    // set props object to pass data to updating details/page and update form
    const handleEditClick = (component) => {
        setUpdateProps({
            setShowSettings: () => {
                setShowSettings()
            },
            userObject: {component},
            deleteUrl: `/${componentType}/delete/${component.id}`,
            putUrl: `/${componentType}/edit/${component.id}`,
            backBtn: `BACK TO ${componentTypeUC}`,
        })
        setShowSettings(true);
    }

    if (ShowSettings) {
        return (
            <UpdateComponent props {...updateProps}/>
        )
    } else {
        return (
            <div>
                <div className="pageContainer mt-4 pt-5 mb-5 pb-5 me-lg-auto ms-lg-auto mb-md-0">
                    <Link
                        className="mt-lg-2"
                        to="/addComponent"
                        state={props.locationStateObj}
                    >
                        <Button title={`ADD A ${componentTypeUC}`}/>
                    </Link>
                    <div className="row">
                        {components.map((component) => (
                            <div className="col-10 col-md-5 ms-auto me-auto card shadow bg-body rounded mb-5 mt-4 p-2"
                                 key={component.id}>
                                <Link
                                    to={props.imgLinkTo}
                                    state={{space: component}}
                                >
                                    <div className="pt-2 text-center">{component.name}</div>
                                    <div>
                                        <img className="detailsImg img-fluid" src={component.fileStackUrl}
                                             alt='image not available'/>
                                    </div>
                                </Link>
                                <Button onClick={() => handleEditClick(component)} title={`EDIT  ${componentTypeUC}`}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        )

    }
}; // AllView
export default AllView;