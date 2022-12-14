import React from "react";
import { Link } from "react-router-dom";
import Button from "../../buttons/Button";
//ToDO: If logged in, then hide login and register buttons. OR redirect to allSpaces
function Welcome() {
  return (
    <div className="pgContainer">
      <h1>TRAQURA</h1>

      <div className="responsiveFs m-w-600 m-auto text-center">
        Traqura is the smart(er) solution for home inventory and personal
        organization. This web app allows users to transform their mobile device
        into a powerful inventory management tool where they can catalogue their
        items, their value, and track them via self-assigned locations and
        totes.
      </div>

      <div className="d-flex flex-column">
        <Link to="/login">
          <Button title="LOGIN" />
        </Link>

        <Link to="/register">
          <Button title="REGISTER" />
        </Link>

        <Link to="/aboutus">
          <Button title="ABOUT US" />
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
