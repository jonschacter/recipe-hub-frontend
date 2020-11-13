import React, { Component } from 'react'
import { connect } from 'react-redux'
import Recipe from './Recipe.js'
import NewCategoryForm from '../category/NewCategoryForm.js'

class Recipes extends Component {
    constructor(props){
        super(props)

        this.state = {
            newCategoryFormToggle: false
        }
    }
    
    renderRecipes = () => {
        return <div>
            { this.props.recipes.map(category => {
                return <div>
                    <h3>{ category.name }</h3>
                    { category.recipes.map(recipe => {
                       return <Recipe key={recipe.id} recipe={recipe} />
                    })}
                </div>
            })}
        </div>
    }
    
    handleNewCategoryFormToggle = () => {
        this.setState(prevState => ({
            newCategoryFormToggle: !prevState.newCategoryFormToggle
        }))
    }

    render(){
        return(
            <div>
                <h2>MY RECIPES</h2>
                { this.props.recipes.length > 0 ? this.renderRecipes() : null }
                <br /><br />
                { this.state.newCategoryFormToggle ? <NewCategoryForm /> : null }
                <button onClick={this.handleNewCategoryFormToggle}>
                    { this.state.newCategoryFormToggle ? "Hide Form" : "Create New Category"}
                </button>
            </div>
        )
    }
}

const mapStateToProps = ({ recipes }) => {
    return {
        recipes
    }
}

export default connect(mapStateToProps)(Recipes)