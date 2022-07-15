import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import login from "../api/login"
import { AuthContext } from "../Contexts/AuthContext"


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

    return <div>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' name='name' value={username} onChange={handleChangeName} />
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' name='password' value={password} onChange={handleChangePassword} />
            <input type='submit' value='Login' />
        </form>
    </div>
}

export default Login