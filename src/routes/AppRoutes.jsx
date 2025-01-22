import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<p>Dashboard</p>}></Route>
          <Route
            path="/searh-flights"
            element={<p>Buscador de Vuelos</p>}
          ></Route>
          <Route
            path="/vulnerabilities"
            element={<p>Vulnerabilidades</p>}
          ></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};
export default AppRoutes;
