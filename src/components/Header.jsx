import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ title, navigate }) => {
  return (
    <header className="Header">
      <h2>
        <Link
          to={"/"}
          style={{
            cursor: "pointer",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {title}
        </Link>
      </h2>
    </header>
  );
};

export default Header;
