import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      login("admin");
      navigate("/dashboard");
    } else if (username === "user" && password === "password") {
      login("user");
      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <MainLayout>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </MainLayout>
  );
};

export default Login;
