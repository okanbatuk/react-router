import React from "react";
import Feed from "../components/Feed";

const Home = ({ loading, error }) => {
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
        <Feed />
      )}
    </main>
  );
};

export default Home;
