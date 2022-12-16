import React from "react";
import {Link} from "react-router-dom";
import {CiBoxes, CiSearch, CiShoppingTag, CiUser} from "react-icons/ci";
import {MdQrCodeScanner} from "react-icons/md";

function SideNavbar(props){
    return(
        <div id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-transparent w-25 position-fixed">
            <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-5">
                    <Link to="/allSpaces" className="text-decoration-none text-black">
                        <CiBoxes size={20}/>
                        <p className="fs-6">Spaces</p>
                    </Link>
                    <Link to="/allItems" className="text-decoration-none text-black">
                        <CiShoppingTag size={20}/>
                        <p className="fs-6">Items</p>
                    </Link>
                    <Link to="/scan" className="text-decoration-none text-black">
                        <MdQrCodeScanner size={20}/>
                        <p className="fs-6">Scan</p>
                    </Link>
                    <Link to="/search" className="text-decoration-none text-black">
                        <CiSearch size={20}/>
                        <p className="fs-6">Search</p>
                    </Link>
                    <Link to="/profile" className="text-decoration-none text-black">
                        <CiUser size={20}/>
                        <p className="fs-6">Profile</p>
                    </Link>
                    <Link to="/logout" className="text-decoration-none text-black">
                        <CiUser size={20}/>
                        <p className="fs-6" onClick={() => localStorage.removeItem("access_token")}>
                            Logout
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar