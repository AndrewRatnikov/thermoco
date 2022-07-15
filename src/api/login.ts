import apiProvider from "./apiProvider";

const login = (data: { username: string, password: string }) => {
    return apiProvider.post('http://127.0.0.1:8000/auth/login', `username=${data.username}&password=${data.password}`)
}

export default login;