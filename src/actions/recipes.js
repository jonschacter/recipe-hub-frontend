export const setRecipes = recipes => {
    return {
        type: "SET_RECIPES",
        recipes
    }
}

export const setRecipe = recipe => {
    return {
        type: "SET_RECIPE",
        recipe
    }
}

export const getRecipes = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/recipes', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch(setRecipes(data))
            })
            .catch(error => alert(error))
    }
}

export const getRecipe = (id) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/recipes/${id}`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }})
            .then(resp => resp.json())
            .then(data => {
                dispatch(setRecipe(data))
            })
            .catch(error => alert(error))
    }
}