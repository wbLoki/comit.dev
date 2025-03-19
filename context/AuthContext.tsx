import { createContext } from 'react';

export interface AuthState {
    user: string | null;
    token: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthState | undefined>(undefined);
