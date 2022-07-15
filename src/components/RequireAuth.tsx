import React, { useContext } from "react"
import { Navigate } from "react-router-dom"

import { AuthContext } from "../Contexts/AuthContext"

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const { token } = useContext(AuthContext)

    if (!token) {
        return <Navigate to='../login' replace />
    }

    return children
}

export default RequireAuth
