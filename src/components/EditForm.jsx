import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import api from "../api/posts";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

export default () => {
  const { id } = useParams();
  const { posts, setPosts } = useContext(DataContext);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const navigate = useNavigate();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    post && (setEditTitle(post.title), setEditBody(post.body));
  }, [post, setEditTitle, setEditBody]);

  const editPost = async (id) => {
    try {
      const datetime = format(new Date(), "MMMM dd, yyyy pp");
      const updatedPost = { id, title: editTitle, body: editBody, datetime };
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTitle && editBody && editPost(post.id);
    setEditTitle("");
    setEditBody("");
    navigate("/");
  };
  return (
    <>
      {editTitle && editBody ? (
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title:</label>
          <input
            autoFocus
            id="postTitle"
            type="text"
            required
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <label htmlFor="postBody">Post:</label>
          <textarea
            id="postBody"
            type="text"
            required
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </>
  );
};
