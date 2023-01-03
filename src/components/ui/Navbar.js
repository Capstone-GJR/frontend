import "./Navbar.css"
import {CiBoxes, CiSearch, CiShoppingTag, CiUser} from "react-icons/ci";
import React from "react";
import { Link } from "react-router-dom";

//TODO: Adjust navbar for large screen size.

const Navbar = props => {

    return (
        <div className="pb-5">
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className='container-fluid'>
                <a className="navbar-brand" href="/">Traqura</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark navWidth" tabIndex="-1" id="offcanvasDarkNavbar"
                     aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header justify-content-end pe-3">
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1">
                            <li className="nav-item">
                                <Link className="nav-link" to="/allSpaces">
                                    <CiBoxes size={20}/>
                                    <p>Spaces</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/allItems">
                                    <CiShoppingTag size={20}/>
                                    <p>All Items</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">
                                    <CiSearch size={20}/>
                                    <p>Search</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Profile">
                                    <CiUser size={20}/>
                                    <p>Profile</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">
                                    <CiUser size={20}/>
                                    <p onClick={() => localStorage.removeItem("access_token")}>Log out</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutUs">
                                    <CiUser size={20}/>
                                    <p>About us</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );


}; // Navbar
export default Navbar;