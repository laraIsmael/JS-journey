import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { courseRoutes } from "./routesConfig";
import CourseNavigation from "./components/CourseNavigation";

// Intro / Landing Page
function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-4">
        Hello Coder.
      </h1>
      <p className="text-gray-300 text-lg sm:text-xl mb-8">
        Welcome to my JavaScript course, the language that powers the web— and
        breaks your heart just enough to keep things interesting. We’re diving
        into real examples, weird quirks, and plenty of “aha!” moments. Ready to
        wrestle with curly braces and come out on top?
      </p>

      <div className="flex flex-col items-center justify-center space-y-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105"
          onClick={() => navigate(courseRoutes[0].path)}
        >
          Let's Go!
        </button>
      </div>

      <footer className="mt-8 text-gray-500 text-sm">
        Built with Vite, React, TypeScript, and Tailwind CSS by Lara Ismael
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar (we’ll expand later) */}
      <aside className="hidden md:block w-64 bg-gray-800 p-4">
        <CourseNavigation />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<IntroPage />} />

          {/* Course modules */}
          {courseRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
