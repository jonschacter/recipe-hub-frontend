export const setRecipes = recipes => {
    return {
        type: "SET_RECIPES",
        recipes
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