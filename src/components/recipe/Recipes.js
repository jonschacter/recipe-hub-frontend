import React, { Component } from 'react'
import { connect } from 'react-redux'
import Recipe from './Recipe.js'

class Recipes extends Component {
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
    
    render(){
        return(
            <div>
                <h2>MY RECIPES</h2>
                { this.props.recipes.length > 0 ? this.renderRecipes() : null }
                <br /><br />
                <button>Create New Category</button>
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