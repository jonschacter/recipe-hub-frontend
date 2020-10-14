import React, { Component } from 'react'

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
        console.log("submitted")
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

export default UserForm