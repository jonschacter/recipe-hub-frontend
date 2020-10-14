import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/currentUser.js'
import { signup } from '../../actions/currentUser.js'

class UserForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            type: props.type
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        
        if (this.state.type === "Sign Up") {
            this.props.signup(this.state, this.props.history)
        } else {
            this.props.login(this.state, this.props.history)
        }

        this.setState({
            username: "",
            password: "",
            type: ""
        })
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }
    
    render(){
        return(
            <form className="user-form" onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                <br/>
                <label>Password:</label>
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                <br/>
                <input type="submit" value={this.state.type} />
            </form>
        )
    }
}

export default connect(null, { login, signup })(UserForm)