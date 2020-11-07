import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipe } from '../../actions/recipes.js'

class RecipeShow extends Component {
    componentDidMount(){
        const { getRecipe, match } = this.props
        getRecipe(match.params.id)
    }
    
    renderReview = () => {
        const { recipe } = this.props
        return(
            <div>
                <h2>{ recipe.name }</h2>
                <p>Rating: { recipe.rating ? recipe.rating : <>N/A</> }</p>
                <p>Category: { recipe.category.name }</p>
                <p>Ingredients: </p>
                <ul>
                    { recipe.ingredients.map(ingredient => {
                        return <li>{ ingredient.name }</li>
                    })}
                </ul>
            </div>
        )
    }

    render(){
        const { recipe, match } = this.props
        return(
            <div>
                { recipe.id === parseInt(match.params.id) ? this.renderReview() : <h3>LOADING...</h3> }
            </div>
        )
    }
}

const mapStateToProps = ({ recipe }) => {
    return {
        recipe
    }
}

export default connect(mapStateToProps, { getRecipe })(RecipeShow)