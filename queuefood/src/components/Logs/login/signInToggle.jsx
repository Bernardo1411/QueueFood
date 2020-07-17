import React, { useState } from 'react'
import SignIn from './SignIn'
import SignInStore from './signInStore'

const initState = {
    isClient: true
}

const SignInToggle = () => {
    const [isStore, setIsClient] = useState({ ...initState })

    return (
        <div>
            <div className="container mt-3">
                <div className="btn-group">
                    <div className="btn btn-secondary" onClick={e => setIsClient(true)}>Client</div>
                    <div className="btn btn-secondary" onClick={e => setIsClient(false)}>Store</div>
                </div>
            </div>
            <br />
            {isStore ? <SignIn /> : <SignInStore />}
        </div>
    )
}

export default SignInToggle
