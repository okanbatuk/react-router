import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const Header = ({ title, width }) => {
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
      {width < 768 ? (
        <FaMobileAlt size="2rem" />
      ) : width < 992 ? (
        <FaTabletAlt size="2rem" />
      ) : (
        <FaLaptop size="2.2rem" />
      )}
    </header>
  );
};

export default Header;
