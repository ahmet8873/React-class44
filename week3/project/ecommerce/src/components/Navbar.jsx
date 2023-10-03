import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
        }}
      >
        <li style={{ marginRight: "20px" }}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
