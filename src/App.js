import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Welcome from './components/Welcome.js'

class App extends Component {
    render(){
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
