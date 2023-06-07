import React, { useState, useEffect, useContext } from "react";
import Post from "./Post";
import DataContext from "../context/DataContext";

const Feed = () => {
  const { searchResult: posts } = useContext(DataContext);
  return (
    <>
      {posts.length ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            color: "red",
            fontSize: "1.2rem",
          }}
        >
          There is no posts to display
        </p>
      )}
    </>
  );
};

export default Feed;
