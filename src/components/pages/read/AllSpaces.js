import {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link} from "react-router-dom";
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";
import { axiosRequest } from '../../util/HelperFunctions';
import {CiBoxes, CiSearch, CiShoppingTag, CiUser} from "react-icons/ci";
import {MdQrCodeScanner} from "react-icons/md";
import SideNavbar from "../../navbar/SideNavbar";
import UpdateComponent from '../update/UpdateComponent';

function AllSpaces() {

    const [components, setComponents] = useState([]);
    const [props, setProps] = useState({});
    const [ShowSettings, setShowSettings] = useState(false);

    const getAllSpaces = async () => {
        try {
            const res = await axiosRequest('GET','/space/all');
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
            setShowSettings:()=> {setShowSettings()},
            userObject:{component},
            deleteUrl:`/space/delete/${component.id}`,
            putUrl:`/space/edit/${component.id}`,
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
            <div>
                <LargeNavbar pageName="All Spaces"/>
                <TopNavbar pageName="All Spaces"/>
                <SideNavbar/>

                <div className="pageContainer mt-5 pt-5 mb-5 pb-5 me-lg-3 ms-lg-auto mb-md-0">
                <Link
                    className="mt-lg-2"
                    to="/addComponent"
                    state={{
                        stateObj:stateObj
                    }}
                    >
                    <Button title="ADD A SPACE"/>
                </Link>
                <div className="row">
                    {components.map((component) => (
                        <div className="w-50 card shadow bg-body rounded mb-5 mt-4 p-1" key={component.id}>
                            <Link
                                to='/allTotesBySpace'
                                state={{ space:component }}
                            >
                                <div className="pt-2 text-center">{component.name}</div>
                                <div>
                                    {/*TODO: Adjust the image to be mobile responsive with card*/}
                                    <img className="detailsImg img-fluid" src={component.fileStackUrl} alt='image not available'/>
                                </div>
                            </Link>
                            <Button onClick={()=> handleEditClick(component)} title="EDIT SPACE" />
                        </div>
                    ))}
                </div>
                </div>
                <BottomNavbar/>
            </div>
        )
    }
}
export default AllSpaces