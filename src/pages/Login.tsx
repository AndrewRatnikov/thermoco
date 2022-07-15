import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import login from "../api/login"
import { AuthContext } from "../Contexts/AuthContext"
import './login.css'

const Login = () => {
    const navigate = useNavigate();
    const [username, setName] = useState('')
    const [password, setPassword] = useState('')
    const { setToken } = useContext(AuthContext)

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await login({ username, password })

        setName('')
        setPassword('')
        setToken(res.access_token)

        if (res.access_token) {
            navigate("../sensors")
        }
    }

    return <div className="login-wrap">
        <div className="login">
            <h2>ThermoCo sensor admin app</h2>
            <h1>Login:</h1>
            <form onSubmit={onSubmit}>
                <div className="login-field">
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type='text' name='name' value={username} onChange={handleChangeName} />
                </div>
                <div className="login-field">
                    <label htmlFor='password'>Password:</label>
                    <input id='password' type='password' name='password' value={password} onChange={handleChangePassword} />
                </div>
                <button type='submit' className="login-submit">Submit</button>
            </form>
        </div>
    </div>
}

export default Login