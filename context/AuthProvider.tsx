'use client';

import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import api from '@lib/api';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    console.log('first log');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('/api/auth/state');
                const data = await res.json();
                if (res.ok) {
                    setUser(data.user);
                }
            } catch (error) {
                console.error('Error fetching user state:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = async (username: string, password: string) => {
        try {
            const response = await api.post('/auth/login', {
                username,
                password,
            });

            console.log('Login response:', response.data); // Debugging log
            console.log('token:', response.data.access_token); // Debugging log
            Cookies.set('access_token', response.data.access_token);
            Cookies.set('username', username);

            setUser(username);
            router.push('/');
        } catch (error: any) {
            console.error(
                'Login failed:',
                error.response?.data?.detail || 'Error'
            );
            if (error.status === 401) {
                throw (
                    error.response?.data?.detail ||
                    'Invalid username or password'
                );
            }
        }
    };

    const logout = () => {
        Cookies.remove('access_token');
        Cookies.remove('username');
        setUser(null);
        router.push('/');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated: !!user,
                isLoading: loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
