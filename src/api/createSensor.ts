import { Sensor } from "../pages/Sensors"
import apiProvider from "./apiProvider"

const createSensor = (data: Sensor, token: string) => {
    return apiProvider.post('http://127.0.0.1:8000/api/v1/sensors/', JSON.stringify(data), token)
}

export default createSensor