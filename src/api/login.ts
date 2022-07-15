import apiProvider from "./apiProvider";

const login = (data: any) => { // TODO: any
    return apiProvider.post('http://127.0.0.1:8000/auth/login', `username=${data.username}&password=${data.password}`)
}

export default login;