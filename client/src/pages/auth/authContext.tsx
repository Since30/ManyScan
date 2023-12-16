import React, { createContext, useContext, useState, ReactNode,useEffect } from 'react';

type AuthContextType = {
    user: { username: string } | null;
    token: string | null; // Ajouter le token ici
    login: (userData: { username: string, token: string }) => void; // Inclure le token dans le type de userData
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<{ username: string } | null>(null);
    const [token, setToken] = useState<string | null>(null);
    console.log("AuthContext: user:", user);

    useEffect(() => {
       
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const login = (userData: { username: string , token: string }) => {
        console.log("Trying to log in with:", userData);
        setUser(userData);
    };

    const logout = () => {
        console.log("Logging out");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext) as AuthContextType;
