import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SignedIn = () => {
    return (
        <div>
            <Nav>
                <LinkContainer to='/singIn'>
                    <Nav.Link>Sign Out</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/singIn'>
                    <Nav.Link>Basket</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/singIn'>
                    <Nav.Link>Icon</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default SignedIn
