import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";

export default ({ navigate, api, posts, setPosts }) => {
  const { id } = useParams();
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
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

      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      {editTitle && editBody ? (
        <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
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
          <button type="submit" onClick={() => editPost(post.id)}>
            Update
          </button>
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
