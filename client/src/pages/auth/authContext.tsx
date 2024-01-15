import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'


type User = {
    username: string;
    id: string;
    role: string;
};

export type AuthContextType = {
    user: User | null;
    token: string | null;
    login: (userData: User & { token: string }) => void;
    logout: () => void;
};


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);



    useEffect(() => {

        if (token) {
            localStorage.setItem('token', token)
        } else {
            localStorage.removeItem('token')
        }
    }, [token])



    const login = (userData: { username: string, id: string, token: string, role: string }) => {
        setUser({ username: userData.username, id: userData.id, role: userData.role });
        setToken(userData.token);
    };
    


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


export const useAuth = () => useContext(AuthContext) as AuthContextType;

export default AuthContext;

