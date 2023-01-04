import {Link} from "react-router-dom";
import Button from "../buttons/Button";
import React from "react";

const PageNotFound = props => {

    return (
        <div className='pgContainer maxWidth600'>
            <h1>Whoops, we can't seem to find that page!</h1>
            <Link to="/allSpaces">
                <Button title="ALL SPACES" />
            </Link>
            <Link to="/">
            <Button title="HOME" />
        </Link>
            <Link to="/aboutus">
                <Button title="ABOUT US" />
            </Link>
        </div>
    )

}; // PageNotFound
export default PageNotFound;