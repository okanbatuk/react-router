import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "./SearchForm";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <Form search={search} setSearch={setSearch} />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">New Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
