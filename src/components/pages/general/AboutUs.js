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
    getTest();

    return (
        <>
            <h1>ABOUT US</h1>
        <div className="pageContainer">
            <h1>Feature coming soon!</h1>
            <h3 className="mb-5 text-center">Please check back soon!</h3>
        </div>
        </>
    )
}

export default AboutUs