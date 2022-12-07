import axios from "axios";
import { useEffect, useState} from "react";

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
            profile page
            <div>
               HELLO {profile.firstName}!!
            </div>
        </div>
    )
} // Profile function

export default Profile