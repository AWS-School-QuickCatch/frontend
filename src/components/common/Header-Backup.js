/* eslint-disable */
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../../assets/styles/Header.css';

function Header() {
    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="lg" className='custom-navbar'>
                <Container>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    <Navbar.Brand href="/">QuickCatch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav> */}
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        </Form>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                            <Nav.Link href="#light-dark">
                                <FaSun className="light-dark-icon" onClick={() => {
                                    
                                }}/>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
