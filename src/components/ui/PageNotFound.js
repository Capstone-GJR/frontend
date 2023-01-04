import {Link} from "react-router-dom";
import Button from "../buttons/Button";
import React from "react";

const PageNotFound = props => {

    return (
        <div className='pgContainer'>
            <h1>OH NO SOMETHING WENT WRONG!</h1>
            <Link to="/allSpaces">
                <Button title="ALL SPACES" />
            </Link>
            <Link to="/aboutus">
                <Button title="ABOUT US" />
            </Link>
        </div>
    )

}; // PageNotFound
export default PageNotFound;