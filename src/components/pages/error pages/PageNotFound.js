import { Link } from "react-router-dom";
import Button from "../../buttons/Button";
import React from "react";

const PageNotFound = (props) => {
  return (
    <div className="pgContainer m-w-600">
      <h1 className="m-3">TRAQURA</h1>
      <h2 className="m-3">Whoops, we can't seem to find that page!</h2>
      <div>
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
    </div>
  );
}; // PageNotFound
export default PageNotFound;
