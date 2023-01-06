import React from "react";
import { FaGithub, FaLinkedinIn, FaUserGraduate } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import design from "../../../assets/design.png";

function AboutUs() {
  return (
    <div className="pgContainer">
      <h2 className="py-2 py-lg-4">THE DEVELOPERS</h2>
      <div className="row">
        <div
          id="developerCards"
          className="d-lg-flex justify-content-lg-evenly"
        >
          <div
            id="greg"
            className="col-11 col-md-10 maxWidthCard card ms-auto me-auto shadow bg-body rounded mb-5 mt-4 p-2 align-items-center"
          >
            <h3 className="pt-2 text-center">Greg Rodriguez Jr.</h3>
            <div className="pt-2">
              <img
                className="detailsImg img-fluid rounded"
                src="https://cdn.filestackcontent.com/oHIaZM5T834zh570vEQb"
                alt="Greg Rodriguez Jr."
              />
            </div>
            <div className="d-flex justify-content-center flex-wrap py-4 g-4">
              <div className="contactButton m-2 m-lg-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/gregrodriguezjr/"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="contactButton m-2 m-lg-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/GregRodriguezJr"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="contactButton m-2 m-lg-2">
                <a href="mailto:greg.rodriguez@outlook.com?subject=User Feedback for Greg Rodriguez">
                  <AiOutlineMail />
                </a>
              </div>
              <div className="contactButton m-2 m-lg-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://alumni.codeup.com/students/1668"
                >
                  <FaUserGraduate />
                </a>
              </div>
            </div>
          </div>
          <div
            id="jenny"
            className="col-11 col-md-10 maxWidthCard card ms-auto me-auto shadow bg-body rounded mb-5 mt-4 p-2 align-items-center"
          >
            <h3 className="pt-2 text-center">Jenny Austin</h3>
            <div className="pt-2">
              <img
                className="detailsImg img-fluid rounded"
                src="https://cdn.filestackcontent.com/baaPNrk4SViaqnDyRwTT"
                alt="Jenny Austin"
              />
            </div>
            <div className="d-flex justify-content-center flex-wrap py-4 g-4">
              <div className="contactButton m-2 m-lg-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/jennynicoleaustin/"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="contactButton m-2 m-lg-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/jennynicoleaustin"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="contactButton m-2 m-lg-2">
                <a href="mailto:jennynicoleaustin@gmail.com?subject=User Feedback for Jenny Austin">
                  <AiOutlineMail />
                </a>
              </div>
              <div className="contactButton m-2 m-lg-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://alumni.codeup.com/students/1654"
                >
                  <FaUserGraduate />
                </a>
              </div>
            </div>
          </div>
          <div
            id="ramaj"
            className="col-11 col-md-10 maxWidthCard card ms-auto me-auto shadow bg-body rounded mb-5 mt-4 p-2 align-items-center"
          >
            <h3 className="pt-2 text-center">Ramaj Johnson</h3>
            <div className="pt-2">
              <img
                className="detailsImg img-fluid rounded"
                src="https://cdn.filestackcontent.com/YHoYce6yTZKF74PpnzDy"
                alt="Ramaj Johnson"
              />
            </div>
            <div className="d-flex justify-content-center flex-wrap  py-4 g-4">
              <div className="contactButton m-2 m-lg-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ramajjohnson/"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="contactButton m-2 m-lg-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/ShivaSamadhi"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="contactButton m-2 m-lg-2">
                <a href="mailto:Rjohnson3795@gmail.com?subject=User Feedback for Ramaj Johnson">
                  <AiOutlineMail />
                </a>
              </div>
              <div className="contactButton m-2 m-lg-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://alumni.codeup.com/students/1658"
                >
                  <FaUserGraduate />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="py-2 py-lg-4">ABOUT US</h3>
      <p className="text-center fs-5 m-auto m-w-1200">
        Traqura is the smart(er) solution for home inventory and personal
        organization. This web app allows users to transform their mobile device
        into a powerful inventory management tool where they can catalogue their
        items, their value, and track them via self-assigned locations and
        totes.
      </p>
      <div className="py-2 py-lg-5">
        <h3 className="py-3 py-lg-5">DEVELOPMENT PROCESS</h3>
        <p className="text-center">Desiging</p>
        <img src={design} className="img-fluid p-1 p-lg-5"/>
      </div>
    </div>
  );
}

export default AboutUs;
