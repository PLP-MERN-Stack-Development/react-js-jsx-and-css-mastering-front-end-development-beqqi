import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow flex items-center justify-between">
      <div className="font-bold text-lg">PLP Task Manager</div>
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/posts" className="hover:underline">Posts</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        {/* Add more links as you add pages */}
        <button
          onClick={toggleTheme}
          className="ml-2 px-3 py-1 rounded bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
