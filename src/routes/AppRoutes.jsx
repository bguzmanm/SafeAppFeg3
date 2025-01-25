import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import SearchFlights from "../pages/SearchFlights";
import Vulnerabilities from "../pages/Vulnerabilities";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/search-flights" element={<SearchFlights />}></Route>
          <Route
            path="/vulnerabilities"
            element={<Vulnerabilities />}
          ></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};
export default AppRoutes;
