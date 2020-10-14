export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const logout = () => {
    // WRITE ME
}

export const login = () => {
    // WRITE ME
}

export const signup = (userInfo, history) => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/signup', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: userInfo
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch(setCurrentUser(data))
                    history.push("/")
                }
            })
            .catch(error => alert(error))
    }
}