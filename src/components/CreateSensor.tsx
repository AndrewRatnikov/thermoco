import { useContext, useState } from 'react'

import createSensor from '../api/createSensor'
import { AuthContext } from '../Contexts/AuthContext'
import { Sensor } from '../pages/Sensors'

import './createSensor.css'

const CreateSensor = ({ addSensor }: { addSensor: (sensor: Sensor) => void }) => {
    const { token } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const [description, setDescription] = useState('')
    const [samplingPeriod, setSamplingPeriod] = useState(5)
    const [isActive, setIsActive] = useState(false)

    const openBtnHandler = () => {
        setIsOpen(prev => !prev)
    }

    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    const handleChangetSamplingPeriod = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSamplingPeriod(+e.target.value)
    }

    const handleChangetActive = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsActive(e.target.value === 'true')
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const sensor = { id: Math.floor(Math.random() * 1000), description, samplingPeriod, isActive }
            createSensor(sensor, token)
            addSensor(sensor)
            setIsOpen(false)
            setDescription('')
            setSamplingPeriod(5)
            setIsActive(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <div className="create-sensor">
                <button onClick={openBtnHandler}>Create new sensor</button>
            </div>
            {isOpen && <div className="create-sensor-form">
                <form onSubmit={onSubmit}>
                    <div className="create-sensor-form-field">
                        <label htmlFor='description'>Description:</label>
                        <input
                            id='description'
                            type='text'
                            name='description'
                            value={description}
                            onChange={handleChangeDescription}
                        />
                    </div>
                    <div className="create-sensor-form-field">
                        <label htmlFor='sampling-period'>Sampling Period:</label>
                        <input
                            id='sampling-period'
                            type='number'
                            min={5}
                            name='sampling-period'
                            value={samplingPeriod}
                            onChange={handleChangetSamplingPeriod}
                        />
                    </div>
                    <div className="create-sensor-form-field">
                        <span>Active:</span>
                        <label htmlFor='active-true'>True</label>
                        <input
                            id='active-true'
                            type='radio'
                            name='active-true'
                            value='true'
                            checked={isActive === true}
                            onChange={handleChangetActive}
                        />
                        <label htmlFor='active-false'>False</label>
                        <input
                            id='active-fasle'
                            type='radio'
                            name='active-fasle'
                            value='false'
                            checked={isActive === false}
                            onChange={handleChangetActive}
                        />
                    </div>
                    <button type='submit'>Create</button>
                </form>
            </div>}
        </div>
    )
}

export default CreateSensor