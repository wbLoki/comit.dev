import { createContext } from 'react';

export interface AuthState {
    user: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthState | undefined>(undefined);
