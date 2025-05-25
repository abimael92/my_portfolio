import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) setAccessToken(token);
    }, []);

    const saveToken = (token) => {
        localStorage.setItem('accessToken', token);
        setAccessToken(token);
    };

    const clearToken = () => {
        localStorage.removeItem('accessToken');
        setAccessToken(null);
    };

    return (
        <AuthContext.Provider value={{ accessToken, saveToken, clearToken }}>
            {children}
        </AuthContext.Provider>
    );
};
