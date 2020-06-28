import React from 'react'
import { connect } from 'react-redux'
import { removeUser } from '../../Actions/AuthAction'
import '../../css/SignedIn.css'
import {withRouter} from 'react-router'

const Profile = props => {
    const { firstName, lastName, initials } = props.profile
    const { uid, email } = props.auth

    const remove = e => {
        e.preventDefault()
        props.removeUser(uid)
        props.history.push('/')
    }

    return (
        <div className="mt-5">
            <div className=" container jumbotron">
                <div className="row d-flex justify-content-center align-item-center">
                    <div className=" col-xs-12 col-md-6">
                        <h3 className="display-4 mb-5">Profile</h3>
                        <div className="container">
                            <h5 className='col-xs-12 col-sm-xs-6 mb-5'>
                                <p>{`First Name: ${firstName}`}</p>
                                <p>{`Last Name: ${lastName}`}</p>
                                <p>{`Email: ${email}`}</p>
                            </h5>
                            <div className="btn btn-danger col-xs-12 col-sm-6 col-lg-4" onClick={remove}>Remove account</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4 d-flex justify-content-center align-item-center border-left border-dark userLogoProfileDiv">
                        <div className="userLogoProfile">
                            <p className="d-flex font-weight-bold text-light m-auto text-uppercase h1">{initials}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.firebase.auth)
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeUser: userId => { dispatch(removeUser(userId)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))