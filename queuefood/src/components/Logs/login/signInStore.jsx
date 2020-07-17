import React, {useState} from 'react'

const SignInStore = props => {
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})
    const submit = (e) => {
        e.preventDefault()

    }

    return (
            <div className="container">
                <div className="jumbotron mt-0 pt-3">
                    <h5 className="display-5 mb-3 text-secondary d-flex justify-content-center">Store</h5>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Set the e-mail of your store" id="email" className="form-control" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary float-right" onClick={submit}>Submit</button>
                    </form>
                    <div className="d-flex justify-content-center">
                        <p className="text-danger">test</p>
                    </div>
                </div>
            </div>
    )
}

export default SignInStore
