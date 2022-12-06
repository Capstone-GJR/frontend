import React from 'react';
// import { CiBoxes } from 'react-icons/fa/';


function Navbar(props) {

    return (
       <div className="container p-0 fixed-bottom">
           <nav className="navbar navbar-dark bg-light p-0">
               <div className="container-fluid p-0 border border-dark bg-dark d-flex justify-content-evenly">
                   <div className="row">
                       <div className="col p-0 m-auto">
                           <button className="btn btn-dark m-auto">
                               {/*<CiBoxes />*/}
                               Spaces
                           </button>
                       </div>
                       <div className="col p-0 m-auto">
                           <button className="btn btn-dark m-auto">
                               Items
                           </button>
                       </div>
                       <div className="col p-0 m-auto">
                           <button className="btn btn-dark m-auto">
                               Scan
                           </button>
                       </div>
                       <div className="col p-0 m-auto">
                           <button className="btn btn-dark m-auto">
                               Search
                           </button>
                       </div>
                       <div className="col p-0 m-auto">
                           <button className="btn btn-dark m-auto">
                               Settings
                           </button>
                       </div>
                   </div>
               </div>
           </nav>
       </div>  )


}

export default Navbar;