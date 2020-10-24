export const getRecipes = () => {
    return dispatch => {
        return fetch('http://localhost:3001/recipes', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => alert(error))
    }
}