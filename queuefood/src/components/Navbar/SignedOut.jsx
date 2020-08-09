import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Aux from '../../hoc/Aux/Aux'

const SignedOut = () => {
    return (
        <Aux>
            <Nav>
                <LinkContainer to='/signIn'>
                    <Nav.Link>Sign in</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/signUp'>
                    <Nav.Link>Sign up</Nav.Link>
                </LinkContainer>
            </Nav>
        </Aux>
    )
}

export default SignedOut
