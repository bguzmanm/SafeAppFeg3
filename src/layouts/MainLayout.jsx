import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MainLayout = ({ children }) => {
  const { user, logout } = useAuth();
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            {!user && <li><Link to="/login">Login</Link></li>}
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/search-flights">Buscar Vuelos</Link>
            </li>
            <li>
              <Link to="/vulnerabilities">Vulnerabilidades</Link>
            </li>
            <li>
              <button
                onClick={logout}
                style={{ background: "none", boder: "none", cursor: "pointer" }}
              >
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 SafeApp</p>
      </footer>
    </div>
  );
};

export default MainLayout;
