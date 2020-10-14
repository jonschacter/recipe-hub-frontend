import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Welcome from './components/Welcome.js'
import UserForm from './components/user/UserForm.js'

class App extends Component {
    render(){
        return (
            <div className="App">
                <Router>
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

export default App;
