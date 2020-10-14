import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const Navbar = ({ loggedIn, logout, history }) => {
    return(
        <div>
            { loggedIn ? null : <><Link to="/">Home</Link> | </> }
            { loggedIn ? <><Link onClick={ () => logout(history) }>Log Out</Link></> : null}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        loggedIn: !!currentUser
    }
}

export default withRouter(connect(mapStateToProps, { logout })(Navbar))