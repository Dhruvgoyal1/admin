// src/components/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-medium">Post</h3>
            <Link
              to="/post"
              className="mt-4 block bg-white text-blue-500 py-2 px-4 rounded-md"
            >
              Go to Posts
            </Link>
          </div>

          <div className="bg-green-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-medium">Comment</h3>
            <Link
              to="/comment"
              className="mt-4 block bg-white text-green-500 py-2 px-4 rounded-md"
            >
              Go to Comments
            </Link>
          </div>

          <div className="bg-purple-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-medium">Photo</h3>
            <Link
              to="/photo"
              className="mt-4 block bg-white text-purple-500 py-2 px-4 rounded-md"
            >
              Go to Photos
            </Link>
          </div>

          <div className="bg-yellow-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-medium">Todo</h3>
            <Link
              to="/todos"
              className="mt-4 block bg-white text-yellow-500 py-2 px-4 rounded-md"
            >
              Go to Todos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
