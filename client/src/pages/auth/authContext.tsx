import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'


type AuthContextType = {

    user: { username: string; id: string } | null
    token: string | null
    login: (userData: { username: string, id: string, token: string }) => void
    logout: () => void
}


const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<{ username: string; id: string } | null>(null)
    const [token, setToken] = useState<string | null>(null)
    console.log("AuthContext: user:", user)


    useEffect(() => {

        if (token) {
            localStorage.setItem('token', token)
        } else {
            localStorage.removeItem('token')
        }
    }, [token])



    const login = (userData: { username: string, id: string, token: string }) => {
        setUser({ username: userData.username, id: userData.id })
        setToken(userData.token)
    }

    const logout = () => {
        console.log("Logging out")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext) as AuthContextType

export default AuthContext