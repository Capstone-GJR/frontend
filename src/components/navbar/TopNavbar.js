import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {AiOutlineAppstoreAdd} from "react-icons/ai";

function TopNavbar(props){
    return(
        <>
            <Navbar bg="dark" variant="dark" className="p-0">
                <Container className="p-1">
                    <Navbar.Brand href="#home" className="m-0">Traqura</Navbar.Brand>
                    <Nav className="me-0">
                        <h3>{props.title}</h3>
                        <Nav.Link href="#home" className="p-0">
                            <button className="btn btn-dark btn-outline-light m-auto">
                                <AiOutlineAppstoreAdd size={30}/>
                            </button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
);
}
export default TopNavbar;