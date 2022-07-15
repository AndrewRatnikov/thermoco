import apiProvider from "./apiProvider";

const login = (token: string) => {
    return apiProvider.get('http://127.0.0.1:8000/api/v1/sensors/', token)
}

export default login;