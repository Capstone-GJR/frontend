import React from 'react'
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai"
import {Link} from "react-router-dom";
import Button from "../../buttons/Button";

function AboutUs() {

    return (
        <div className='container'>
            <div className='row p-2'>
                <h1>ABOUT US</h1>
            </div>
            <div className="row mt-3 mb-3 w-auto">
                <p className="text-center fs-5">Traqura is the smart(er) solution for home inventory and personal organization. This web app allows users to transform their mobile device into a powerful inventory management tool where they can catalogue their items, their value, and track them via self-assigned locations and totes.</p>
            </div>

            <div className='row mt-5'>
                <h1 className="text-uppercase">The Developers</h1>
            </div>
            <div className='row'>
            <div id="developerCards" className='d-lg-flex justify-content-lg-evenly'>
                <div id="greg" className="col-11 col-md-10 col-lg-4 card ms-auto me-auto shadow bg-body rounded mb-5 mt-4 p-2 align-items-center">
                    <h3 className="pt-2 text-center">
                        Greg Rodriguez Jr.
                    </h3>
                    <div className="pt-2">
                        <img className="detailsImg img-fluid rounded"
                             src="https://cdn.filestackcontent.com/oHIaZM5T834zh570vEQb"
                             alt='Greg Rodriguez Jr.'/>
                    </div>
                    <div className="d-flex items-center justify-between max-w-[330px] py-4 g-4">
                        <div
                            className="contactButton m-3 m-lg-2">
                            <a target="_blank"
                               rel="noreferrer"
                               href="https://www.linkedin.com/in/gregrodriguezjr/"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </div>
                        <div
                            className="contactButton m-3 m-lg-2">
                            <a target="_blank"
                               rel="noreferrer"
                               href="https://www.github.com/GregRodriguezJr">
                                <FaGithub/>
                            </a>
                        </div>
                        <div
                            className="contactButton m-3 m-lg-2">
                            <a href="mailto:greg.rodriguez@outlook.com">
                                <AiOutlineMail/>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="jenny" className="col-11 col-md-10 col-lg-4 card ms-auto me-auto shadow bg-body rounded mb-5 mt-4 p-2 align-items-center">
                    <h3 className="pt-2 text-center">
                        Jenny Austin
                    </h3>
                    <div className="pt-2">
                        <img className="detailsImg img-fluid rounded"
                             src="https://cdn.filestackcontent.com/baaPNrk4SViaqnDyRwTT"
                             alt='Jenny Austin'/>
                    </div>
                    <div className="d-flex items-center justify-between max-w-[330px] m-auto py-4 g-4">
                        <div
                            className="contactButton m-3 m-lg-2">
                            <a target="_blank"
                               rel="noreferrer"
                               href="https://www.linkedin.com/in/jennynicoleaustin/"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </div>
                        <div
                            className="contactButton m-3 m-lg-2">
                            <a target="_blank"
                               rel="noreferrer"
                               href="https://www.github.com/jennynicoleaustin">
                                <FaGithub/>
                            </a>
                        </div>
                        <div
                            className="contactButton m-3 m-lg-2">
                            <a href="mailto:jennynicoleaustin@gmail.com">
                                <AiOutlineMail/>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="ramaj" className="col-11 col-md-10 col-lg-4 card ms-auto me-auto shadow bg-body rounded mb-5 mt-4 p-2 align-items-center">
                    <h3 className="pt-2 text-center">
                        Ramaj Johnson
                    </h3>
                    <div className="pt-2">
                        <img className="detailsImg img-fluid rounded"
                             src="https://cdn.filestackcontent.com/YHoYce6yTZKF74PpnzDy"
                             alt='Ramaj Johnson'/>
                    </div>
                    <div className="d-flex items-center justify-between max-w-[330px] m-auto py-4 g-4">
                        <div
                            className="contactButton m-3 m-lg-2">
                            <a target="_blank"
                               rel="noreferrer"
                               href="https://www.linkedin.com/in/ramajjohnson/"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </div>
                        <div
                            className="contactButton m-3 m-lg-2">
                            <a target="_blank"
                               rel="noreferrer"
                               href="https://www.github.com/ShivaSamadhi">
                                <FaGithub/>
                            </a>
                        </div>
                        <div
                            className="contactButton m-3 m-lg-2">
                            <a href="mailto:Rjohnson3795@gmail.com">
                                <AiOutlineMail/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='row justify-content-center my-2'>
                <div className='col col-md-8 col-lg-6 ms-auto me-auto'>
                    <Link to='/'>
                        <Button title="HOME"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;