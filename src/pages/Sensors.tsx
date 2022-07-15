import { useContext, useEffect, useState } from "react"

import getSensors from "../api/getSensors"
import deleteSensor from "../api/deleteSensor"
import DeleteSensor from "../components/DeleteSensor"
import { AuthContext } from "../Contexts/AuthContext"

import './sensors.css'

const Sensors = () => {
    const { token } = useContext(AuthContext)
    const [sensors, setSensors] = useState<{
        description: string,
        isActive: boolean,
        samplingPeriod: number,
        id: number
    }[]>([])

    const handleDeleteSensor = (id: number) => () => {
        try {
            deleteSensor(id, token)

            const newSensors = sensors.filter(sensor => sensor.id !== id)

            setSensors(newSensors)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getSensors(token).then((res) => {
            setSensors(res)
        })

    }, [])

    return (<div>
        <table className="sensors-table">
            <caption>Sensors</caption>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Sampling Period</th>
                    <th>Active</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {sensors.map(sensor => (<tr>
                    <td>{sensor.description}</td>
                    <td>{sensor.samplingPeriod}</td>
                    <td>{sensor.isActive ? 'true' : 'false'}</td>
                    <td>
                        <DeleteSensor handler={handleDeleteSensor(sensor.id)} />
                    </td>
                </tr>))}
            </tbody>
        </table>
    </div>)
}

export default Sensors