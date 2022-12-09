import axios from "axios";
import React, { useEffect, useState} from "react";
import LargeNavbar from "../../navbar/LargeNavbar";
import TopNavbar from "../../navbar/TopNavbar";
import BottomNavbar from "../../navbar/BottomNavbar";
import Button from "../../buttons/Button"
import { Link } from "react-router-dom";

function Profile(){

    const [profile, setProfile] = useState({})
    useEffect(() => {
        const getProfile = async () => {
            try {
                const res = await axios.get('user/', {
                    headers: {
                        Authorization: localStorage.getItem("access_token")
                    }
                })
                console.log(res.data)
                setProfile(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getProfile();
        }, [])

    const deleteProfile = () => {
        console.log('delete profile clicked');
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