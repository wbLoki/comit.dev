"use client";

import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import api from "@lib/api";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const fetchTokens = async () => {
    try {
      const response = await api.get("users/me/");
      if (response.status !== 200) {
        return;
      }
      setUser(response.data.username);
      setToken(response.data.tokens[0].token);
    } catch (error) {
      console.error("Error fetching token:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTokens();
  }, []);

  const resetPassword = async (reset_token: string, password: string) => {
    const response = await api.post(
      `/auth/reset-password/?token=${reset_token}&new_password=${password}`
    );
    if (response.status !== 200) {
      throw new Error(response.data.detail);
    }
    return response.data.message;
  };

  const forgetPassword = async (email: string) => {
    const response = await api.post(`auth/forgot-password/?email=${email}`);
    if (response.status !== 200) {
      throw new Error(response.data.detail);
    }
    return response.data.message;
  };

  const register = async (
    username: string,
    password: string,
    email: string,
    confirmPassword: string
  ) => {
    try {
      const response = await api.post("auth/register", {
        username,
        password,
        email,
        confirmPassword,
      });
      if (response.status !== 200) {
        if (response.data.detail) {
          throw new Error(response.data.detail);
        }
        throw new Error("Registration failed");
      }
      router.push("/login");
    } catch (error: any) {
      if (error.status === 400) {
        throw error.response?.data?.detail || "Invalid username or password";
      }
      throw error;
    }
  };

  const login = async (username: string, password: string) => {
    const response = await api.post("auth/login", {
      username,
      password,
    });

    if (response.status !== 200) {
      if (response.data.detail) {
        throw new Error(response.data.detail);
      }
      throw new Error("Login failed");
    }
    Cookies.set("access_token", response.data.access_token);
    Cookies.set("username", username);

    setUser(username);
    router.push("/dashboard");
  };
  const logout = () => {
    Cookies.remove("access_token");
    Cookies.remove("username");
    setUser(null);
    router.push("/");
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
        forgetPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
