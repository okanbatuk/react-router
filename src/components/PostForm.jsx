import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const PostForm = ({ posts, setPosts, navigate, api }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const addPost = async (title, body) => {
    try {
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const datetime = format(new Date(), "MMMM dd, yyyy pp");
      const newPost = { id, title, body, datetime };

      const response = await api.post("/posts", newPost);
      const postList = [...posts, response.data];
      setPosts(postList);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postTitle && postBody && (addPost(postTitle, postBody), navigate("/"));
    setPostTitle("");
    setPostBody("");
  };

  return (
    <form className="newPostForm" onSubmit={handleSubmit}>
      <label htmlFor="postTitle">Title:</label>
      <input
        autoFocus
        id="postTitle"
        type="text"
        required
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <label htmlFor="postBody">Post:</label>
      <textarea
        id="postBody"
        type="text"
        required
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default PostForm;
