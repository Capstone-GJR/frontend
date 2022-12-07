import axios from "axios";
import { useEffect, useState} from "react";

function Profile(){

    const [profile, setProfile] = useState({})
    useEffect(() => {
        const getProfile = async () => {
            try {
                // TODO: Need to pass in the user_id via local storage after Jenny figures out how to pass the user_id in the authentication response body
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
        // TODO:?? Yo GREG! Why does this run multiple times? How do we get it to run just once.
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