import React from 'react'
import {Link} from 'react-router-dom';
import Button from '../../buttons/Button';

function Logout() {
    return (
        <div className='container'>
            <div className='row justify-content-center my-2'>
                <h1>Thanks for visiting Traqura</h1>
            </div>
            <div className="py-5">
                <div className='row justify-content-center pt-5 my-2'>
                    <div className='col col-lg-6'>
                        <Link to='/login'>
                            <Button title="LOGIN"/>
                        </Link>
                    </div>
                </div>
                <div className='row justify-content-center my-2'>
                    <div className='col col-lg-6'>
                        <Link to='/register'>
                            <Button title="REGISTER"/>
                        </Link>
                    </div>
                </div>
                <div className='row justify-content-center my-2'>
                    <div className='col col-lg-6'>
                        <Link to='/aboutUs'>
                            <Button title="ABOUT US "/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout