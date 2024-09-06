import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Form, useNavigate } from "react-router-dom";
import { authService } from "../api";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      const userData = await authService(username, password);

      if (userData) {
        login(userData);
        navigate("/");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <Form onSubmit={handleLogin}>
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
    </Form>
  );
};

export default LoginPage;
