import React, { useState, useEffect } from "react";
import Feed from "../components/Feed";

const Home = ({ loading, error, posts }) => {
  return (
    <main className="Home">
      {error ? (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            color: "red",
            fontSize: "1rem",
          }}
        >
          Error: {error}
        </p>
      ) : loading ? (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontStyle: "italic",
            fontSize: "1rem",
          }}
        >
          Loading..
        </p>
      ) : (
        <Feed posts={posts} />
      )}
    </main>
  );
};

export default Home;
