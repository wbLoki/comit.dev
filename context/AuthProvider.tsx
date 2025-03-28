'use client';

import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import api from '@lib/api';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const fetchTokens = async () => {
        try {
            const response = await api.get('users/me/');
            if (response.status !== 200) {
                return;
            }
            setUser(response.data.username);
            setToken(response.data.tokens[0].token);
        } catch (error) {
            console.error('Error fetching token:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTokens();
    }, []);

    const register = async (
        username: string,
        password: string,
        email: string,
        confirmPassword: string
    ) => {
        try {
            const response = await api.post('auth/register', {
                username,
                password,
                email,
                confirmPassword,
            });
            if (response.status !== 200) {
                if (response.data.detail) {
                    throw new Error(response.data.detail);
                }
                throw new Error('Registration failed');
            }
            router.push('/login');
        } catch (error: any) {
            if (error.status === 400) {
                throw (
                    error.response?.data?.detail ||
                    'Invalid username or password'
                );
            }
            throw error;
        }
    };

    const login = async (username: string, password: string) => {
        try {
            const response = await api.post('auth/login', {
                username,
                password,
            });

            console.log(response.data.access_token);
            Cookies.set('access_token', response.data.access_token);
            Cookies.set('username', username);

            setUser(username);
            router.push('/dashboard');
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
        } finally {
            await fetchTokens();
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
                token,
                login,
                logout,
                isAuthenticated: !!user,
                isLoading: loading,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
