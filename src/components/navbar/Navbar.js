import React from 'react';
// import { CiBoxes } from 'react-icons/fa/';


function Navbar(props) {

    return (
       <div className="container p-0 fixed-bottom">
           <nav className="navbar navbar-dark bg-light p-0">
               <div className="container-fluid p-0 border border-dark bg-dark justify-content-around">
                   <div className="row">
                       <div className="col p-0">
                           <button className="btn btn-dark">
                               {/*<CiBoxes />*/}
                               Spaces
                           </button>
                       </div>
                       <div className="col p-0">
                           <button className="btn btn-dark">
                               Spaces
                           </button>
                       </div>
                       <div className="col p-0">
                           <button className="btn btn-dark">
                               Spaces
                           </button>
                       </div>
                       <div className="col p-0">
                           <button className="btn btn-dark">
                               Spaces
                           </button>
                       </div>
                       <div className="col p-0">
                           <button className="btn btn-dark">
                               Spaces
                           </button>
                       </div>
                   </div>
               </div>
           </nav>
       </div>  )


}

export default Navbar;