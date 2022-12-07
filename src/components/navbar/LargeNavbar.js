import React from 'react';
import {Button, Container, Nav, Navbar, NavItem, NavLink} from "react-bootstrap";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {CiBoxes, CiSearch, CiShoppingTag, CiUser} from "react-icons/ci";
import {Link} from "react-router-dom";
import {MdQrCodeScanner} from "react-icons/md";

function LargeNavbar(props){
    return(

           <nav className="navbar d-none d-sm-block d-md-block navbar-expand-lg navbar-dark bg-dark">
               <div className="container-fluid">
                   <a className="navbar-brand" href="#">
                    Traqura
                   </a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse" aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse m-0" id="navCollapse">
                       <div className="dropdown ms-auto">
                           <button className="btn btn-dark btn-outline-light dropdown-toggle me-0" type="button" id="dropdownMenuButton1"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                               Menu
                           </button>
                           <ul className="dropdown-menu dropdown-menu-lg-end text-center" aria-labelledby="dropdownMenuButton1">
                               <li >
                                   <Link to="/spaces" className="text-decoration-none text-black">
                                           <CiBoxes size={20}/>
                                           <p className="fs-6">Spaces</p>
                                   </Link>
                               </li>
                               <li>
                                   <Link to="/items" className="text-decoration-none text-black">
                                           <CiShoppingTag size={20}/>
                                           <p className="fs-6">Items</p>
                                   </Link>
                               </li>
                               <li>
                                   <Link to="/scan" className="text-decoration-none text-black">
                                           <MdQrCodeScanner size={20}/>
                                           <p className="fs-6">Scan</p>
                                   </Link>
                               </li>
                               <li>
                                   <Link to="/search" className="text-decoration-none text-black">
                                           <CiSearch size={20}/>
                                           <p className="fs-6">Search</p>
                                   </Link>
                               </li>
                               <li>
                                   <Link to="/profile" className="text-decoration-none text-black">
                                           <CiUser size={20}/>
                                           <p className="fs-6">Profile</p>
                                   </Link>
                               </li>
                               <li>
                                   <Link to="/logout" className="text-decoration-none text-black">
                                       <CiUser size={20}/>
                                       <p className="fs-6">Logout</p>
                                   </Link>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>
           </nav>

    )
}

export default LargeNavbar
// .d-sm-none .d-md-block