import React from "react";
import { Link } from "react-router-dom";
import Button from "../../buttons/Button";

function Logout() {
  return (
    <div className="pgContainer m-w-600">
      <h1>Thanks for visiting Traqura</h1>
      <div className="d-flex flex-column">
        <Link to="/login">
          <Button title="LOGIN" />
        </Link>
        <Link to="/">
          <Button title="HOME" />
        </Link>
      </div>
    </div>
  );
}

export default Logout;
