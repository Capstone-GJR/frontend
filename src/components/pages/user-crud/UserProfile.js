import axios from "axios";
import React, { useEffect, useState} from "react";
import LargeNavbar from "../../navbar/LargeNavbar";
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import Button from "../../buttons/Button";
import { Link } from "react-router-dom";
import { AuthZHeader } from "../../util/HelperFunctions";

function Profile(){

    const [profile, setProfile] = useState({});

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

    const deleteProfile = async () => {
        try {
            const res = await axios.delete(`user/delete/${profile.id}`,AuthZHeader());
            console.log(res);
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
            <Link to="/logout">
                <Button title="Logout" onClick={()=> localStorage.removeItem("access_token")}/>
            </Link> 
            <Button 
                title="Delete Profile" 
                color='#d9534f'
                onClick={deleteProfile}
            />
            <BottomNavbar/>
        </div>
    )
} // Profile function

export default Profile