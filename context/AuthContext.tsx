import { createContext } from "react";

export interface AuthState {
  user: string | null;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  register: (
    username: string,
    password: string,
    email: string,
    confirmPassword: string
  ) => Promise<void>;
  forgetPassword: (email: string) => Promise<string>;
  resetPassword: (reset_token: string, password: string) => Promise<string>;
}

export const AuthContext = createContext<AuthState | undefined>(undefined);
