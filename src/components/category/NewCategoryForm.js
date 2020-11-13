import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCategory } from '../../actions/categories.js'

class NewCategoryForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: ""
        }
    }
    
    handleChange = ({ target }) => {
        this.setState({
            name: target.value
        })
    }

    handleSubmit = event => {
        // not sure i want to prevent default
        event.preventDefault()
        
        this.props.createCategory({ name: this.state.name })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Category Name:</label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                <br />
                <input type="submit" value="Create Category" />
            </form>
        )
    }
}

export default connect(null, { createCategory })(NewCategoryForm)