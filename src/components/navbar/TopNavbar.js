import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {Link} from "react-router-dom";
import PageNameHeader from "./PageNameHeader";

function TopNavbar(props){
    return(
        <>
            <Navbar bg="dark" variant="dark" className="p-0 d-block d-sm-none d-md-none fixed-top">
                <Container className="p-1">
                    <Link to="/allSpaces">
                    <Navbar.Brand className="m-0">Traqura</Navbar.Brand>
                    </Link>
                    <PageNameHeader pageName={props.pageName}/>
                </Container>
            </Navbar>
        </>
);
}
export default TopNavbar;