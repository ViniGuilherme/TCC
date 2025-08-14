import React from "react";
import background from "../assets/background.jpg";

const SearchBar = () => {
  return (
    <div
  className="search-bar"
  style={{
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "25% 26%",
    minHeight: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
  }}
>
  <input
    type="text"
    placeholder="Pesquise serviços ou empresas"
    style={{
      padding: "10px",
      width: "350px",
      borderRadius: "20px",
      border: "1px solid #ccc",
      outline: "none",
      marginRight: "10px",
    }}
  />
  <button
    style={{
      padding: "10px 15px",
      borderRadius: "20px",
      border: "none",
      background: "#007bff",
      color: "#fff",
      cursor: "pointer",
    }}
  >
    Buscar
  </button>
</div>
  );
};

export default SearchBar;