export const createCategory = (categoryData) => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/categories', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoryData)
        })
            .then(resp => resp.json())
            .then(data => {
                // finish this!
                console.log(data)
            })
            .catch(error => alert(error))
    }
}