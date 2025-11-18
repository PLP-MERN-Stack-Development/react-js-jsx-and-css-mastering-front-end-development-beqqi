import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left">© {new Date().getFullYear()} PLP Task Manager. All rights reserved.</p>
        <div className="space-x-4 mt-2 sm:mt-0">
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline">React</a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Tailwind CSS</a>
        </div>
      </div>
    </footer>
  );
}
