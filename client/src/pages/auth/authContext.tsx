// authContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
    user: { username: string } | null;
    login: (userData: { username: string }) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<{ username: string } | null>(null);

    const login = (userData: { username: string }) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext) as AuthContextType;
