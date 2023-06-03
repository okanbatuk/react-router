import React, { useState, useEffect } from "react";

const Header = ({ title, navigate }) => {
  return (
    <header className="Header">
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        {title}
      </h2>
    </header>
  );
};

export default Header;
