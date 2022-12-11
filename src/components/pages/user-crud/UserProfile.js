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
            console.log(res.data);
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
            const res = await axios.delete(`user/delete/${profile.id}`,AuthZHeader());
            console.log(res);
            alertUser();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <LargeNavbar />
            <TopNavbar/>
            <h2>HELLO {profile.firstName}!!</h2>
            <div>First Name: {profile.firstName}</div>
            <div>Last Name: {profile.lastName}</div>
            <div>email: {profile.email}</div>

            <CustomAlert
                showAlert={showAlert}
                alertVariant="danger"
                alertHeading={`Your profile has been deleted, goodbye ${profile.firstName}!`}
            />

            <Link to="/updateUser">
                <Button title="Edit Profile" />
            </Link> 

            <ConfirmBox
                btnTitle="Delete Profile"
                btnColor="#d9534f"
                modalBody="Are you sure you want to delete your profile?" 
                comfirmBtnVariant="danger"
                confirmBtn={deleteProfile}
            />

            <Link to="/logout">
                <Button title="Logout" onClick={removeAuthZ}/>
            </Link> 
            
            <BottomNavbar/>
        </div>
    )
} // Profile function

export default Profile