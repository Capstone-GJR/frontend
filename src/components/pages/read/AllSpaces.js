import axios from 'axios';
import {useEffect, useState} from 'react';
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import {Link} from "react-router-dom";
import LargeNavbar from "../../navbar/LargeNavbar";
import Button from "../../buttons/Button";
import UpdateSpace from '../update/UpdateSpace';
import { AuthZHeader } from '../../util/HelperFunctions';

function AllSpaces() {

    const [spaces, setSpaces] = useState([]);
    const [space, setSpace] = useState({});
    const [ShowSettings, setShowSettings] = useState(false);

    const getUserSpaces = async () => {
        try {
            const response = await axios.get('/space/all', AuthZHeader())
            setSpaces(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserSpaces();
    }, [ShowSettings])

    const handleClick = (space) => {
        setSpace(space);
        setShowSettings(true);
    }

    if (ShowSettings) {
        return (
            <UpdateSpace
                setShowSettings={setShowSettings}
                space={space}
                getUserSpaces={getUserSpaces}
            />
        )
    } else {
        return (
            <div>
                <LargeNavbar/>
                <TopNavbar/>
                <h1>All Spaces</h1>
                <div className="pageContainer">
                <Link to="/space/add">
                    <Button title="ADD SPACE"/>
                </Link>
                <div>
                    {spaces.map((space) => (
                        <div className="card mt-4 p-2 w-70">
                            <Link to='/allTotesBySpace'
                                state={{
                                    space_id: `${space.id}`,
                                    space_name: `${space.name}`
                                }}>
                                <div className="pt-2 text-center">{space.name}</div>
                                <div className='p-4 m-3' key={space.id}>
                                    {/*TODO: Adjust the image to be mobile responsive with card*/}
                                    <img className="detailsImg" src={space.fileStackUrl} alt='image not available'/>
                                </div>
                            </Link>
                            <Button onClick={()=> handleClick(space)} title={`EDIT: ` + space.name} />

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