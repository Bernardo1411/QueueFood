import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signUpStore } from '../../../Actions/AuthAction'

const initState = {
    companyName: '',
    cnpj: '',
    email: '',
    password: ''
}

class SignUpStore extends Component {
    state = { ...initState }

    insertData = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault()
        this.props.signUpStore(this.state)
    }

    render() {
        return (
                <div className="container">
                    <div className="jumbotron mt-0 pt-3">
                        <h5 className="display-5 mb-3 text-secondary d-flex justify-content-center">Store</h5>
                        <form>
                            <div className="form-group">
                                <label htmlFor="companyName">Company name</label>
                                <input type="text" placeholder="company name" id="companyName" className="form-control" onChange={this.insertData} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cnpj">CNPJ</label>
                                <input type="number" placeholder="CNPJ" id="cnpj" className="form-control" onChange={this.insertData} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Company e-mail</label>
                                <input type="email" placeholder="Company e-mail" id="email" className="form-control" onChange={this.insertData} />
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
        )
    }
}

const mapStateToProps = state => {
    return {
        authFail: state.auth.authFail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpStore: store => dispatch(signUpStore(store))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpStore)