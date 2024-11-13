// src/components/Comments.js
import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    const newComment = { name, comment };
    setComments([...comments, newComment]);
    setName("");
    setComment("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Comments</h1>
      <form onSubmit={handleAddComment} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          required
        />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Comment
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">All Comments</h2>
        <ul className="mt-4 space-y-2">
          {comments.map((com, index) => (
            <li key={index} className="p-4 border border-gray-300 rounded-md">
              <p className="font-bold">{com.name}</p>
              <p>{com.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
