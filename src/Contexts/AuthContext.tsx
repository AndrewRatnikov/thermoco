import React, { useState } from "react";

export const AuthContext = React.createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState('');

    return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>
}

interface AuthContextType {
    token: string,
    setToken: (token: string) => void
};

export default AuthProvider;