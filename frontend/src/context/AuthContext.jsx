import React, { createContext, useContext, useEffect, useState } from "react";
import MainLoading from "../components/MainLoading";
import { removeToken, setToken } from "../utils/token";
import { getUser } from "../api/index";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    validateToken();
  }, []);

  const login = (userData) => {
    setUser(userData.user);
    setToken(userData.token);
  };

  const logout = () => {
    setUser(null);
    removeToken();
  };

  const isAuthenticated = () => {
    return user;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {!loading ? children : <MainLoading />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
