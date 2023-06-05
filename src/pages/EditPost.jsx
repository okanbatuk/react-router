import React, { useEffect, useState } from "react";
import Form from "../components/EditForm";

export default ({ navigate, api, posts, setPosts }) => {
  return (
    <main className="PostPage">
      <h1>Edit Post</h1>
      <Form navigate={navigate} api={api} posts={posts} setPosts={setPosts} />
    </main>
  );
};
