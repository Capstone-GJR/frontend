import React from 'react';
import {Link} from "react-router-dom";
import { CiBoxes } from 'react-icons/ci';
import { CiShoppingTag } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';
import { CiUser } from 'react-icons/ci';
import { MdQrCodeScanner } from 'react-icons/md';


function BottomNavbar(props) {

    return (
       <div className="container p-0 fixed-bottom d-block d-sm-none">
               <div className="container-fluid p-0 border border-dark bg-dark d-flex justify-content-evenly">
                   <div className="row row-cols-auto">
                       <div className="col p-0 m-auto  border-start">
                           <Link to="/allspaces">
                               <button className="btn btn-dark m-auto">
                                   <CiBoxes size={20}/>
                                   <p className="fs-6">Spaces</p>
                               </button>
                           </Link>
                       </div>
                       <div className="col p-0 m-auto border-start">
                           <Link to="/allItems">
                           <button className="btn btn-dark m-auto">
                               <CiShoppingTag size={20}/>
                               <p className="fs-6">Items</p>
                           </button>
                           </Link>
                       </div>
                       <div className="col border-start">
                           <Link to="/scan">
                           <button className="btn btn-dark ">
                               <MdQrCodeScanner size={20}/>
                               <p className="fs-6">Scan</p>
                           </button>
                           </Link>
                       </div>
                       <div className="col p-0 m-auto border-start">
                           <Link to="/search">
                           <button className="btn btn-dark m-auto">
                               <CiSearch size={20}/>
                               <p className="fs-6">Search</p>
                           </button>
                           </Link>
                       </div>
                       <div className="col ps-0 pe-0 m-auto border-start border-end">
                           <Link to="/profile">
                           <button className="btn btn-dark m-auto">
                               <CiUser size={20}/>
                               <p className="fs-6">Profile</p>
                           </button>
                           </Link>
                       </div>
                   </div>
               </div>
       </div>  )


}

export default BottomNavbar;