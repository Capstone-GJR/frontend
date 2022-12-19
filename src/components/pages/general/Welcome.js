import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../buttons/Button';
import LargeNavbar from "../../navbar/LargeNavbar";

function Welcome() {
  return (
    <div className='container'>
        <LargeNavbar />
        <div className='row header' style={{marginBottom:"25em"}}>
        <div className='col text-center'>
          <h1>TRAQURA</h1>
        </div>
      </div>
      <div className='row justify-content-center my-2'>
        <div className='col col-lg-6'>
          <Link to='/login'>
            <Button title="LOGIN" />
          </Link>
        </div>
      </div>
      <div className='row justify-content-center my-2'>
        <div className='col col-lg-6'>
          <Link to='/register'>
            <Button title="REGISTER"  />
          </Link>
        </div>
      </div>
        <div className='row justify-content-center my-2'>
            <div className='col col-lg-6'>
                <Link to='/aboutus'>
                    <Button title="ABOUT US"  />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Welcome;