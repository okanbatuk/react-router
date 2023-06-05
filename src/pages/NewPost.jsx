import React, { useState, useEffect } from "react";
import Form from "../components/PostForm";

const NewPost = ({ posts, setPosts, navigate, api }) => {
  return (
    <main className="PostPage">
      <h1>New Post</h1>
      <Form
        navigate={navigate}
        api={api}
        posts={posts}
        setPosts={setPosts}
      />
    </main>
  );
};

export default NewPost;
