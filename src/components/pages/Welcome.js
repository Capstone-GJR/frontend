import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';

function Home() {
  return (
    <div className='container'>
      <div className='row' style={{marginBottom:"25em"}}>
        <div className='col text-center'>
          <h1>TRAQURA</h1>
        </div>
      </div>
      <div className='row justify-content-center my-5'>
        <div className='col col-lg-6'>
          <Link to='/login'>
            <Button title="LOGIN" />
          </Link>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col col-lg-6'>
          <Link to='/register'>
            <Button title="NEW ACCOUNT?"  />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;