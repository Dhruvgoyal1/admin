// src/components/Todo.js
import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo(""); // Clear input after adding
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
      <form onSubmit={handleAddTodo} className="mb-4">
        <input
          type="text"
          placeholder="Add new todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white p-2 rounded-md"
        >
          Add Todo
        </button>
      </form>
      <ul className="list-disc pl-5">
        {todos.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
