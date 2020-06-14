import React, { useState } from 'react'
import {signIn} from '../../Actions/AuthAction'
import {connect} from 'react-redux'

const SignIn = props => {
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})
    const submit = (e) => {
        e.preventDefault()
        props.signIn({email, password})
        //props.history.push('/')
    }
    return (
        <div className="container">
            <div className="jumbotron ">
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" id="email" className="form-control" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary float-right    " onClick={submit}>Submit</button>
                </form>
                <div className="d-flex justify-content-center">
                    <p className="text-danger">{props.authFail}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return state.auth
}

const mapDispatchToProps = dispatch =>{
    return{ 
        signIn: user => dispatch(signIn(user))
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
