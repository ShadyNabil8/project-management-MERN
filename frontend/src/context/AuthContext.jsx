import React, { createContext, useContext, useEffect, useState } from "react";
import MainLoading from "../components/MainLoading";
import { fakeUsersData } from "../assets/data";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          // validate token from server
          await new Promise((resolve) => {
            setTimeout(resolve, 2000);
          });
          setUser(fakeUsersData);
        } else {
          setUser(null);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    validateToken();
  }, []);

  const login = (userData) => {
    setUser(userData.user);
    localStorage.setItem("token", userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
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
