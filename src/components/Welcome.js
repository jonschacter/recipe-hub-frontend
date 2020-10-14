import React from 'react'
import { connect } from 'react-redux'

import LoginButton from './user/LoginButton.js'
import SignupButton from './user/SignupButton.js'

const Welcome = ({ loggedIn }) => {
    return (
        <div>
            { loggedIn ? null : <p><LoginButton/> or <SignupButton/></p> }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(Welcome)