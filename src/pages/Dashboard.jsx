import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../context/AuthContext";
import { getSecureData } from "../services/api";

const Dashboard = () => {
  const { user } = useAuth();
  const [secureData, setSecureData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("user");
      if (!token) {
        setError("No se encontró un token válido. Inicia sesión de nuevo.");
        return;
      }
      try {
        console.log("voy a llamar al getSecureData", token);

        const data = await getSecureData(token);
        setSecureData(data);
      } catch (error) {
        setError("Token inválido o no autorizado");
        console.error(error);
      }
    };
    if (user?.role === "admin") {
      fetchData();
    }
  }, [user]);

  return (
    <MainLayout>
      <h1>Dashboard</h1>
      {user?.role === "admin" && (
        <>
          <p>Bienvenido, Administrador. Aquí están los datos protegidos:</p>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <ul>
            {secureData.map((item) => (
              <li key={item.id}>{item.info}</li>
            ))}
          </ul>
        </>
      )}
      {user?.role === "user" && (
        <>
          <p>
            Bienvenido Usuario. No tienes acceso a los datos protegidos. Te
            falta calle...
          </p>
          <p>Consulta con el administrador para más información.</p>
        </>
      )}
    </MainLayout>
  );
};

export default Dashboard;
