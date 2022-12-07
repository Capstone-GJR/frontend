import axios from "axios";
import React, { useEffect, useState} from "react";
import LargeNavbar from "../navbar/LargeNavbar";
import TopNavbar from "../navbar/TopNavbar";
import BottomNavbar from "../navbar/BottomNavbar";

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

    return (

        <div>
            <LargeNavbar />
            <TopNavbar/>
            profile page
            <div>
               HELLO {profile.firstName}!!
            </div>
            <BottomNavbar/>

        </div>
    )
} // Profile function

export default Profile