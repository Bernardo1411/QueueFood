import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { signOut } from '../../Actions/AuthAction'

const SignedIn = props => {
    return (
        <div>
            <Nav>
                <LinkContainer to='/signIn'>
                    <Nav.Link onClick={props.signOut}>Sign Out</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/singIn'>
                    <Nav.Link>Basket</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/singIn'>
                    <Nav.Link>
                        <div className="container rounded-circle bg-dark justify-content-center align-items-center">
                            <p className="d-flex font-weight-bold text-light m-auto">BF</p>
                        </div>
                    </Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

const mapStateToProps = state => {
    return state.firestore.users
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn)
