import React from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import {connect} from 'react-redux'

const NavBar = props => {
    
    const {isAuth} = props
    const links = isAuth?<SignedIn/>:<SignedOut/>

        return (
            <div className="sticky-top">
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
                        
                        {links}
                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
}

const mapStateToProps = state =>{
    return{
        isAuth: state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(NavBar)
