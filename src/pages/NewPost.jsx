import React, { useState, useEffect } from "react";
import Form from "../components/PostForm";

const NewPost = ({
  posts,
  setPosts,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
  navigate,
}) => {
  return (
    <main className="PostPage">
      <h1>New Post</h1>
      <Form
        navigate={navigate}
        posts={posts}
        setPosts={setPosts}
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        postBody={postBody}
        setPostBody={setPostBody}
      />
    </main>
  );
};

export default NewPost;
