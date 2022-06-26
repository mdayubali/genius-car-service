import React from 'react';
import { Container, Nav, Navbar,} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <>
         <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/"><img src={logo} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="text-white me-auto fs-4">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                <Nav.Link as={NavLink} to='/service'>Services</Nav.Link>
                <Nav.Link as={NavLink} to='/expert'>Experties</Nav.Link>
                
            </Nav>
            <Nav className="text-white fs-4">
                <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                <Nav.Link as={NavLink} to="/login">
                Login
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>   
        </>
    );
};

export default Header;