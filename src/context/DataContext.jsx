import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { data } = useFetch("/posts");
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    setPosts(() => {
      return data;
    });
  }, [data]);

  useEffect(() => {
    const filteredResult = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredResult.reverse());
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        search,
        setSearch,
        searchResult,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
