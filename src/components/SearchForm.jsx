import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const SearchForm = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search Posts</label>
      <input
        id="search"
        type="text"
        placeholder="Search Posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
