import React, { useState } from 'react'

import SignUp from './SignUp'
import SignUpStore from './signUpStore'
import Aux from '../../../hoc/Aux/Aux'

const initState = {
    isClient: true
}

const SignInToggle = () => {
    const [isStore, setIsClient] = useState({ ...initState })

    return (
        <Aux>
            <div className="container mt-3">
                <div className="btn-group">
                    <div className="btn btn-secondary" onClick={e => setIsClient(true)}>Client</div>
                    <div className="btn btn-secondary" onClick={e => setIsClient(false)}>Store</div>
                </div>
            </div>
            <br />
            {isStore ? <SignUp /> : <SignUpStore />}
        </Aux>
    )
}

export default SignInToggle