// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Photos from "./components/Photos";
import Todos from "./components/Todos"; // Import the Todo component
import PrivateRoute from "./components/PrivateRoute";
// import Comments from "./components/Comments";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/post"
          element={
            <PrivateRoute>
              <Posts />
            </PrivateRoute>
          }
        />
        <Route
          path="/comment"
          element={
            <PrivateRoute>
              <Comments />
            </PrivateRoute>
          }
        />
        <Route
          path="/photo"
          element={
            <PrivateRoute>
              <Photos />
            </PrivateRoute>
          }
        />
        <Route
          path="/todos"
          element={
            <PrivateRoute>
              <Todos />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
