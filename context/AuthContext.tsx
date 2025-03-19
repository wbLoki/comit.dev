import { createContext } from 'react';

export interface AuthState {
    user: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    register: (
        username: string,
        password: string,
        email: string
    ) => Promise<void>;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthState | undefined>(undefined);
