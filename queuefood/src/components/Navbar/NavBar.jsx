import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="warning" variant="light" expand="lg">
                    <LinkContainer to='/'>
                        <Navbar.Brand>Queue</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mr-auto">
                            <LinkContainer to='/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>

                            <NavDropdown title="Info" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <LinkContainer to='/contact'>
                                        <Nav.Link>Contact</Nav.Link>
                                    </LinkContainer>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item>
                                    <LinkContainer to='/about'>
                                        <Nav.Link>About</Nav.Link>
                                    </LinkContainer>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                            <SignedOut/>
                            <SignedIn/>
                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
