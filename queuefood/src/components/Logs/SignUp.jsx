import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSignIn } from '../../Actions/AuthAction'

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
        this.props.addSignIn(this.state)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
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
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return state.auth
}

const mapDispatchToProps = dispatch => {
    return {
        addSignIn: newUser => dispatch(addSignIn(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
