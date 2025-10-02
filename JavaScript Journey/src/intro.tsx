import { useNavigate } from "react-router-dom";
import { courseRoutes } from "./routesConfig";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl max-w-2xl w-full text-center mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-400 mb-4">
        Hello Coder.
      </h1>
      <p className="text-gray-300 text-lg sm:text-xl mb-6">
        Welcome to my JavaScript course, the language that powers the web—and
        breaks your heart just enough to keep things interesting. We’re diving
        into real examples, weird quirks, and plenty of “aha!” moments. Ready to
        wrestle with curly braces and come out on top?
      </p>

      {/* Console.log note */}
      <p className="text-gray-400 text-sm mt-4 italic">
        💡 Quick note: Throughout this course, we’ll use{" "}
        <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono">
          console.log
        </code>{" "}
        to show what our JavaScript is doing. Don’t worry if this feels new—
        it’s just a simple way to print messages so we can “peek” at how code
        behaves. Think of it as our debugging sidekick.
      </p>

      {/* Course roadmap */}
      <div className="bg-gray-900 rounded-xl p-6 mt-8 text-left">
        <h2 className="text-2xl font-bold text-teal-400 mb-3">
          🚀 What We’ll Explore Together
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base">
          <li>
            📦 <span className="font-semibold">The Basics:</span> variables,
            data types, operators, and conditionals—the building blocks of JS.
          </li>
          <li>
            🔁 <span className="font-semibold">Functions & Loops:</span> writing
            reusable code and controlling flow, plus arrays, objects, stacks, &
            queues.
          </li>
          <li>
            ✨ <span className="font-semibold">Modern JavaScript:</span> arrow
            functions, destructuring, spread/rest syntax, and Big O efficiency
            concepts.
          </li>
          <li>
            ⚡ <span className="font-semibold">Asynchronous JS:</span>{" "}
            callbacks, Promises, async/await, and the event loop (with stacks
            and queues in action).
          </li>
          <li>
            🧠 <span className="font-semibold">Advanced Concepts:</span>{" "}
            closures, prototypes, hash tables, binary search, and beyond.
          </li>
        </ul>
        <p className="text-gray-400 text-sm mt-4">
          Each module comes with interactive exercises so you can tinker, break
          things, and really understand how it all works.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 mt-10">
        <button
          className="bg-teal-500 hover:bg-teal-600 active:bg-teal-700 transition-colors duration-200 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105"
          onClick={() => navigate(courseRoutes[1].path)}
        >
          Let’s Go!
        </button>
      </div>

      <footer className="mt-8 text-gray-500 text-sm">
        Built with Vite, React, TypeScript, and Tailwind CSS by Lara Ismael
      </footer>
    </div>
  );
}
