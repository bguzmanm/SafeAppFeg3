import { useState } from "react";
import { getFlights } from "../services/api";
import MainLayout from "../layouts/MainLayout";

const SearchFlights = () => {
  const [query, setQuery] = useState("");
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);

  const sanitizedInput = (input) => {
    const div = document.createElement("div");
    div.innerText = input;

    console.log("input:", input);
    console.log("innerText:", div.innerText);
    console.log("innerHtml:", div.innerHTML);

    return div.innerHTML;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const sanitizedQuery = sanitizedInput(query);
      const allFlights = await getFlights();
      const filteredFlights = allFlights.filter(
        (fligth) =>
          fligth.origin.toLowerCase().includes(sanitizedQuery.toLowerCase()) ||
          fligth.destination
            .toLowerCase()
            .includes(sanitizedQuery.toLowerCase())
      );
      setFlights(filteredFlights);
    } catch (error) {
      setError("Error al buscar vuelos. Inténtalo de nuevo.");
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <h1>Buscar Vuelos</h1>
      <form onSubmit={handleSearch}>
        <label>
          Origen o Destino:
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Chimbarongo"
          />
        </label>
        <button type="submit">Buscar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {flights.length === 0 && (
        <p style={{ color: "red" }}>No se encontraron vuelos</p>
      )}
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.origin} -&gt; {flight.destination} - {flight.price}
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default SearchFlights;
