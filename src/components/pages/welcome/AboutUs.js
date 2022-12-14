import React from 'react'
import BottomNavbar from "../../navbar/BottomNavbar";

import TopNavbar from "../../navbar/TopNavbar";
import LargeNavbar from "../../navbar/LargeNavbar";
import axios from "axios";
import {AuthZHeader} from "../../util/HelperFunctions";

function AboutUs() {

    const getTest = async () => {
        try {
            const res = await axios.get('user/test', AuthZHeader());
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>About Us</div>
    )
}

export default AboutUs