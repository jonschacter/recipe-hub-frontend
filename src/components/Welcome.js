import React from 'react'

import LoginButton from './user/LoginButton.js'
import SignupButton from './user/SignupButton.js'

const Welcome = () => {
    return (
        <div>
            <h1>WELCOME</h1>
            <p>
                <LoginButton/> or <SignupButton/>
            </p>
        </div>
    )
}

export default Welcome