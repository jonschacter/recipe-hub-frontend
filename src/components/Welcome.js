import React from 'react'
import { connect } from 'react-redux'

import LoginButton from './user/LoginButton.js'
import SignupButton from './user/SignupButton.js'

const Welcome = ({ loggedIn, history }) => {
    const redirectToRecipes = () => {
        history.push('/recipes')
    }
    
    return (
        <div>
            { loggedIn ? redirectToRecipes() : <p><LoginButton/> or <SignupButton/></p> }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(Welcome)