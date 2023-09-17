import React from "react";
import "./Search.scss";

function Search() {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="O que você está buscando?"
      />
      <img
        className="search-icon"
        src="./images/MagnifyingGlass.svg"
        alt="search"
      />
    </div>
  );
}

export default Search;
