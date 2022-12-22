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
import SideNavbar from "../../navbar/SideNavbar";

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
            <LargeNavbar pageName="Profile"/>
            <TopNavbar/>
            <SideNavbar/>
            <div className="container me-lg-0 pe-lg-0 mt-lg-3">
                <div className="pageContainer mb-5 pb-5 pb-5 me-lg-auto pe-lg-0 ms-lg-auto mb-md-0 d-flex justify-content-center">
                    <h1 className="text-center mb-2">Hello {profile.firstName}!</h1>
                    <div className="row mb-5 mt-3 gy-4">
                        <div className="h3 m3">First Name: {profile.firstName}</div>
                        <div className="h3 m3">Last Name: {profile.lastName}</div>
                        <div className="h3 m3">email: {profile.email}</div>
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
            </div>
            <BottomNavbar/>
        </>
    )
} // Profile function

export default Profile