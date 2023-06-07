import React, { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/posts";
import DataContext from "../context/DataContext";

const PostPage = () => {
  const { id } = useParams();
  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();
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
                navigate(`/post/edit/${post.id}`);
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
