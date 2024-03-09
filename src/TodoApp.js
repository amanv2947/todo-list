import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 bg-gray-100 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Todo App</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 w-64"
            placeholder="Add a new todo"
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <span>{todo}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
