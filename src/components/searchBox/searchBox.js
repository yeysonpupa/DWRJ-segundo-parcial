import React, { useState } from "react";
import SearchIcon from "./searchIcon";
import "./index.css";

const SearchBox = ({ onSearch }) => {
  const [buscar, setBuscar] = useState('');

  // Barra de búsqueda
  const manejarBusqueda = (e) => {
    const busqueda = e.target.value;
    setBuscar(busqueda);
    onSearch(busqueda); 
  };

  return (
    <div className="search-box">
      <SearchIcon />
      <input
        type="text"
        placeholder="Busca en este sitio web"
        value={buscar}
        onChange={manejarBusqueda}
      />
    </div>
  );
};

export default SearchBox;
