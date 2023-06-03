import React, { useState, useEffect } from "react";
import Feed from "../components/Feed";

const Home = ({ posts }) => {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
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
    </main>
  );
};

export default Home;
