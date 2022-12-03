export const setUpToken = (token) => {
    return localStorage.setItem('token', JSON.stringify(token))
}
export const setUpHeader = () => {
    let token = JSON.parse(localStorage.getItem('token'))
    console.log(token)
    return `Bearer ${token}`
}
export const checkToken = () => {
    return localStorage.getItem('token') ? true : false
}

export const clearToken = () => {
    return localStorage.clear()
}