import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import api from "./api/posts";
import useFetch from "./hooks/useFetch";
import useWindowSize from "./hooks/useWindowSize";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import Missing from "./pages/Missing";
import EditPost from "./pages/EditPost";

const App = () => {
  const { data, loading, error } = useFetch("/posts");
  const { width } = useWindowSize();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setPosts(data);
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
    <div className="App">
      <Header title="React JS Blog" width={width} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home loading={loading} error={error} posts={searchResult} />
          }
        />
        <Route
          exact
          path="/post"
          element={
            <NewPost
              navigate={navigate}
              api={api}
              posts={posts}
              setPosts={setPosts}
            />
          }
        />
        <Route
          path="/post/edit/:id"
          element={
            <EditPost
              navigate={navigate}
              api={api}
              posts={posts}
              setPosts={setPosts}
            />
          }
        />
        <Route
          path="/post/:id"
          element={
            <PostPage
              navigate={navigate}
              api={api}
              posts={posts}
              setPosts={setPosts}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
