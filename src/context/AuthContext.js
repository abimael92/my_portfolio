import React, { createContext, useState, useEffect } from 'react';
import { validateToken } from '../auth/tokenUtils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                setLoading(false);
                return;
            }
            const valid = await validateToken(token);
            if (valid) {
                setAccessToken(token);
            } else {
                localStorage.removeItem('accessToken');
                setAccessToken(null);
            }
            setLoading(false);
        };
        checkToken();
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
        <AuthContext.Provider value={{ accessToken, saveToken, clearToken, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
