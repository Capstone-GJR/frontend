import axios from "axios";
import React, { useEffect, useState} from "react";
import Button from "../../buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthZHeader, removeAuthZ } from "../../util/HelperFunctions";
import CustomAlert from "../../buttons/CustomAlert";
import ConfirmBox from "../../buttons/ConfirmBox";
import Navbar from "../../ui/Navbar";


function Profile(){
    const [profile, setProfile] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const getProfile = async () => {
        try {
            const res = await axios.get('user/', AuthZHeader());
            setProfile(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProfile();
    },[])

    const alertUser = () => {
        setShowAlert(true);
        setTimeout(()=> {
            removeAuthZ();
            navigate('/');
        }, 4000);
    }

    const deleteProfile = async () => {
        try {
            await axios.delete(`user/delete/${profile.id}`,AuthZHeader());
            alertUser();
        } catch (error) {
            console.log(error);
        }
    }

    return (
                <div className="pgContainer maxWidth600">
                <Navbar />
                    <h1>Hello {profile.firstName}!</h1>
                    <div className="d-flex-col">
                        <div className="h3 m-3"><b>First Name: </b> {profile.firstName}</div>
                        <div className="h3 m-3"><b>Last Name: </b> {profile.lastName}</div>
                        <div className="h3 m-3"><b>Email: </b> {profile.email}</div>
                </div>
                <div>
                    <CustomAlert
                        showAlert={showAlert}
                        alertVariant="danger"
                        alertHeading={`Your profile has been deleted, goodbye ${profile.firstName}!`}
                    />
                    <Link to="/updateUser" state={{ profile }}>
                        <Button title="EDIT PROFILE" />
                    </Link> 

                    <Link to="/updatePassword" state={{ profile }}>
                        <Button title="CHANGE PASSWORD" />
                    </Link> 

                    <Link to="/logout">
                        <Button title="LOGOUT" onClick={removeAuthZ}/>
                    </Link> 

                    <ConfirmBox
                        btnTitle="DELETE PROFILE"
                        btnColor="#d9534f"
                        modalBody="Are you sure you want to delete your profile?" 
                        comfirmBtnVariant="danger"
                        confirmBtn={deleteProfile}
                    />
                </div>
            </div>
    )
} // Profile function

export default Profile