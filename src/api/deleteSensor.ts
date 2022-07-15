import apiProvider from "./apiProvider"

const delSensor = (id: number, token: string) => {
    return apiProvider.delete(`http://127.0.0.1:8000/api/v1/sensors/${id}`, token)
}

export default delSensor 
