// src/components/Posts.js
import React, { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddPost = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Posts</h1>
      <form onSubmit={handleAddPost} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Post
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">All Posts</h2>
        <ul className="mt-4 space-y-2">
          {posts.map((post, index) => (
            <li key={index} className="p-4 border border-gray-300 rounded-md">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
