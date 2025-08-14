import React from "react";

const categories = ["Pet Shop", "Pet Food", "Pet Serv", "Pet Care"];

const CategoryMenu = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "50px",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      {categories.map((category, index) => (
        <button
          key={index}
          style={{
            padding: "10px 15px",
            borderRadius: "20px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#0056b3")}
          onMouseOut={(e) => (e.target.style.background = "#007bff")}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryMenu;