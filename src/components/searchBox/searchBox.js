import React from "react";

import SearchIcon from "./searchIcon";

import "./index.css";

const SearchBox = () => {

  return(
  <div className="search-box">
    <SearchIcon />
    <input type="text" placeholder="Busca en este sitio web" />
  </div>
)};

export default SearchBox;
