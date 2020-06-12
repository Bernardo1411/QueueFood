import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SignedOut = () => {
    return (
        <div>
            <Nav>
                <LinkContainer to='/signIn'>
                    <Nav.Link>Sign in</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/signUp'>
                    <Nav.Link>Sign up</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default SignedOut
