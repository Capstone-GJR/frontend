import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../buttons/Button';
import LargeNavbar from "../../navbar/LargeNavbar";

function Welcome() {
  return (
    <div className='container col'> 
        <div className='row header' style={{marginBottom:"15em"}}>
        <div className='col text-center'>
          <h1>TRAQURA</h1>
        </div>
            <div className="row mt-3 mb-3 w-auto">
                <p className="text-center fs-5 col col-md-8 col-lg-6 ms-auto me-auto">Traqura is the smart(er) solution for home inventory and personal organization. This web app allows users to transform their mobile device into a powerful inventory management tool where they can catalogue their items, their value, and track them via self-assigned locations and totes.</p>
            </div>
      </div>
      <div className='row justify-content-center my-2'>
        <div className='col col-md-8 col-lg-6 ms-auto me-auto'>
          <Link to='/login'>
            <Button title="LOGIN" />
          </Link>
        </div>
      </div>
      <div className='row justify-content-center my-2'>
        <div className='col col-md-8 col-lg-6 ms-auto me-auto'>
          <Link to='/register'>
            <Button title="REGISTER"  />
          </Link>
        </div>
      </div>
        <div className='row justify-content-center my-2'>
            <div className='col col-md-8 col-lg-6 ms-auto me-auto'>
                <Link to='/aboutus'>
                    <Button title="ABOUT US"  />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Welcome;