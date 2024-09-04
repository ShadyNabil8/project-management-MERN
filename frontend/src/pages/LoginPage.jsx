import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { fakeUsersData } from "../assets/data";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = await fakeAuthService(username, password);

    if (userData) {
      login(userData);
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

const fakeAuthService = (username, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === "u" && password === "p") {
        resolve({ user: fakeUsersData, token: "fake-jwt-token" });
      } else {
        resolve(null);
      }
    }, 1000);
  });
};

export default LoginPage;
