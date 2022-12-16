import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {Link} from "react-router-dom";

function TopNavbar(props){
    return(
        <>
            <Navbar bg="dark" variant="dark" className="p-0 d-block d-sm-none d-md-none">
                <Container className="p-1">
                    <Link to="/allSpaces">
                    <Navbar.Brand className="m-0">Traqura</Navbar.Brand>
                    </Link>
                    <Nav className="me-0">
                        <h3>{props.title}</h3>
                        <Link to="/add">
                        <Nav.Link className="p-0">
                            <button className="btn btn-dark btn-outline-light m-auto">
                                <AiOutlineAppstoreAdd size={30}/>
                            </button>
                        </Nav.Link>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
);
}
export default TopNavbar;