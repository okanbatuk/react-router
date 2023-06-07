import React from "react";
import { Link } from "react-router-dom";
import Form from "./SearchForm";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <Form />

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
