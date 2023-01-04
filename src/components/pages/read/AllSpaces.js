import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Button from "../../buttons/Button";
import {axiosRequest} from '../../util/HelperFunctions';
import UpdateComponent from '../update/UpdateComponent';

function AllSpaces() {
    //ToDo: Display error message if unable to load data?

    const [components, setComponents] = useState([]);
    const [props, setProps] = useState({});
    const [ShowSettings, setShowSettings] = useState(false);

    const getAllSpaces = async () => {
        try {
            const res = await axiosRequest('GET', '/space/all');
            setComponents(res.data);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllSpaces();
    }, [ShowSettings])

    // Object to pass using useLocation for adding a new space to dynamic add page/add form
    const stateObj = {
        componentType: 'space',
        addUrl: `/space/add`
    }

    // set props object to pass data to updating details/page and update form
    const handleEditClick = (component) => {
        setProps({
            setShowSettings: () => {
                setShowSettings()
            },
            userObject: {component},
            deleteUrl: `/space/delete/${component.id}`,
            putUrl: `/space/edit/${component.id}`,
            backBtn: 'Back to Spaces',
        })
        setShowSettings(true);
    }

    if (ShowSettings) {
        return (
            <UpdateComponent props {...props}/>
        )
    } else {
        return (
                <div className="pgContainer m-w-900">
                    <h2>ALL SPACES</h2>
                    <Link
                        to="/addComponent"
                        state={{
                            stateObj: stateObj
                        }}
                    >
                        <Button title="ADD A SPACE"/>
                    </Link>
                    <div className="cardWrapper">
                        {components.map((component) => (
                            <div className="componentCard" key={component.id}>
                                <h4>{component.name}</h4>
                                <Link
                                    to='/allTotesBySpace'
                                    state={{space: component}}
                                >
                                    <img src={component.fileStackUrl} alt='image not available'/>
                                </Link>
                                <Button onClick={() => handleEditClick(component)} title="EDIT SPACE"/>
                            </div>
                        ))}
                    </div>
                </div>
        )
    }
}

export default AllSpaces