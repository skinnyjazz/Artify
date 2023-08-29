import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo header__logo">
        <Link to={"/Artify"} style={{ textDecoration: "none", color: "inherit" }}>
          Gallery
        </Link>
      </h1>
    </header>
  );
};
