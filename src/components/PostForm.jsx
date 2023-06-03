import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const PostForm = ({
  posts,
  setPosts,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
  navigate,
}) => {
  const addPost = (title, body) => {
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const postList = [
      ...posts,
      {
        id,
        title,
        body,
        datetime: format(new Date(), "MMMM dd, yyyy pp"),
      },
    ];

    setPosts(postList);
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