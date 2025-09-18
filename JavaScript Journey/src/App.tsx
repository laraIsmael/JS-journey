import { useState } from 'react';

// Main App component
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      {/* Container for the main content */}
      <div className="bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center">
        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-4">
          Hello, React!
        </h1>
        {/* Subtitle/description */}
        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          This is a quickstart project using Vite, React, TypeScript, and Tailwind CSS.
        </p>

        {/* Counter section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-400 text-base">You clicked the button {count} times.</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105"
            onClick={() => setCount((c) => c + 1)}
          >
            Increment Counter
          </button>
        </div>
      </div>

      {/* Footer/attribution */}
      <footer className="mt-8 text-gray-500 text-sm">
        Built with Vite, React, TypeScript, and Tailwind CSS
      </footer>
    </div>
  );
}