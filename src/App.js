import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCurrentUser } from './actions/currentUser.js'

import Navbar from './components/Navbar.js'
import Welcome from './components/Welcome.js'
import UserForm from './components/user/UserForm.js'

class App extends Component {
    
    componentDidMount(){
        this.props.getCurrentUser()
    }
    
    render(){
        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <h1>RECIPE HUB</h1>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/login" render={(routerProps) => <UserForm {...routerProps} type="Log In" />} />
                        <Route exact path="/signup" render={(routerProps) => <UserForm {...routerProps} type="Sign Up" />} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default connect(null, { getCurrentUser })(App)
