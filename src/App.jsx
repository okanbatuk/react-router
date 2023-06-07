import React from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { DataProvider } from "./context/DataContext";
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
  const { loading, error } = useFetch("/posts");

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home loading={loading} error={error} />}
          />
          <Route exact path="/post" element={<NewPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
};

export default App;
