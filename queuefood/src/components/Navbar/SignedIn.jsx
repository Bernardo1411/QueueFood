import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { signOut } from '../../Actions/AuthAction'
import '../../css/SignedIn.css'

const SignedIn = props => {
    const { initials } = props.userProfile
    const { uid } = props.userId
    return (
        <div>
            <Nav>
                <div className="signedIn">
                    <LinkContainer to='/signIn'>
                        <Nav.Link onClick={props.signOut}>Sign Out</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={`/basket/${uid}`}>
                        <Nav.Link>Basket</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={`/profile/${uid}`}>
                        <Nav.Link>
                            <div className="userLogo">
                                <p className="d-flex font-weight-bold text-light m-auto text-uppercase">{initials}</p>
                            </div>
                        </Nav.Link>
                    </LinkContainer>
                </div>
            </Nav>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userProfile: state.firebase.profile,
        userId: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn)