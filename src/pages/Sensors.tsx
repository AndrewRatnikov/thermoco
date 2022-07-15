import { useContext, useEffect, useState } from "react"

import getSensors from "../api/getSensors"
import { AuthContext } from "../Contexts/AuthContext"

const Sensors = () => {
    const { token } = useContext(AuthContext)
    const [sensors, setSensors] = useState<{ description: string, isActive: boolean, samplingPeriod: number }[]>([])

    useEffect(() => {
        getSensors(token).then((res) => {
            setSensors(res)
        })

    }, [])

    return (<div>
        <table>
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
                    <td>{sensor.isActive}</td>
                    <td>Actions</td>
                </tr>))}
            </tbody>
        </table>
    </div>)
}

export default Sensors