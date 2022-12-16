import axios from "axios";
import React, { useEffect, useState} from "react";
import LargeNavbar from "../../navbar/LargeNavbar";
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import Button from "../../buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthZHeader, removeAuthZ } from "../../util/HelperFunctions";
import CustomAlert from "../../buttons/CustomAlert";
import ConfirmBox from "../../buttons/ConfirmBox";

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
        <>
            <LargeNavbar />
            <TopNavbar/>
            <div className="container">
                <h2 className="text-center">HELLO {profile.firstName}!!</h2>
                <div className="d-flex justify-content-center"> 
                    <div>
                        <div>First Name: {profile.firstName}</div>
                        <div>Last Name: {profile.lastName}</div>
                        <div>email: {profile.email}</div>
                    </div>    
                </div>
                <div className="maxWidth600 margin-0-Auto">
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
            <BottomNavbar/>
        </>
    )
} // Profile function

export default Profile