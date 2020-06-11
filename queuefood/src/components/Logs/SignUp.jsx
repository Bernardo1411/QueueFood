import React, { useState } from 'react'
import connect from 'react-redux'

const SignOut = props => {
    const [firstName, setFirstName] = useState({})
    const [lastName, setLastName] = useState({})
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})

    const submit = e =>{
        e.preventDefault()

    }

    return (
        <div>
            <div className="container">
                <div className="jumbotron">
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" placeholder="Name" id="firstName" className="form-control" onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" placeholder="Name" id="lastName" className="form-control" onChange={e => setLastName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Email" id="email" className="form-control" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignOut
