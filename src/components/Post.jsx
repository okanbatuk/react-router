import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <h2>
          {post.title.length <= 50
            ? post.title
            : `${post.title.slice(0, 50)}...`}
        </h2>
        <p className="postDate">{post.datetime}</p>
      </Link>
      <p className="postBody">
        {post.body.length <= 75 ? post.body : `${post.body.slice(0, 75)}...`}
      </p>
    </article>
  );
};

export default Post;
