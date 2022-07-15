import apiProvider from "./apiProvider";

const getHealth = () => {
    return apiProvider.get('http://127.0.0.1:8000/health')
}

export default getHealth;