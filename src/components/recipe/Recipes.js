import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Recipe from './Recipe.js'

const Recipes = ({ recipes }) => {
    const renderRecipes = () => {
        return <div>
            { recipes.map(category => {
                return <div>
                    <h3>{ category.name }</h3>
                    { category.recipes.map(recipe => {
                       return <Recipe key={recipe.id} recipe={recipe} />
                    })}
                </div>
            })}
        </div>
    }
    
    return(
        <div>
            <h2>MY RECIPES</h2>
            { recipes.length > 0 ? renderRecipes() : null }
            <br /><br />
            <Link to="/categories/new">Create New Category</Link>
        </div>
    )
}

const mapStateToProps = ({ recipes }) => {
    return {
        recipes
    }
}

export default connect(mapStateToProps)(Recipes)