import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, setPosts, navigate, api }) => {
  const { id } = useParams();
  const post = posts?.find((post) => post.id.toString() === id);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="PostPage">
      <article className="post">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button
              className="editBtn"
              onClick={() => {
                navigate(`/edit/${post.id}`);
              }}
            >
              Update Post
            </button>
            <button className="deleteBtn" onClick={() => handleDelete(post.id)}>
              Delete Post
            </button>
          </>
        ) : (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
