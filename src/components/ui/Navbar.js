import "./Navbar.css"
import {CiBoxes, CiSearch, CiShoppingTag, CiUser} from "react-icons/ci";
import React from "react";

//TODO: Adjust navbar for large screen size.

const Navbar = props => {

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className='container-fluid'>

                <a className="navbar-brand border border-secondary rounded ps-3 pe-3" href="/allSpaces">
                    <strong>T</strong>
                </a>

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
                                <a className="nav-link" href="/allSpaces">
                                    <CiBoxes size={20}/>
                                    <p>Spaces</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/allItems">
                                    <CiShoppingTag size={20}/>
                                    <p>All Items</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/search">
                                    <CiSearch size={20}/>
                                    <p>Search</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Profile">
                                    <CiUser size={20}/>
                                    <p>Profile</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logout">
                                    <CiUser size={20}/>
                                    <p onClick={() => localStorage.removeItem("access_token")}>Log out</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/aboutUs">
                                    <CiUser size={20}/>
                                    <p>About us</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );


}; // Navbar
export default Navbar;