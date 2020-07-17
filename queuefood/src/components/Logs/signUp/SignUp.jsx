import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../../Actions/AuthAction'

const initState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

class SignUp extends Component {

    state = { ...initState }

    insertData = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron mt-0 pt-3">
                        <h5 className="display-5 mb-3 text-secondary d-flex justify-content-center">Client</h5>
                        <form>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" placeholder="Name" id="firstName" className="form-control" onChange={this.insertData} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" placeholder="Last Name" id="lastName" className="form-control" onChange={this.insertData} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder="Email" id="email" className="form-control" onChange={this.insertData} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="password" id="password" className="form-control" onChange={this.insertData} />
                            </div>
                            <button type="submit" className="btn btn-primary float-right" onClick={this.submit}>Submit</button>
                        </form>
                        <div className="d-flex justify-content-center">
                            <p className="text-danger">{this.props.authFail}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.auth
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: newUser => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)