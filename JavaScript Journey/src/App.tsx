import { Routes, Route, Navigate } from "react-router-dom";
import { courseRoutes } from "./routesConfig";
import CourseNavigation from "./components/CourseNavigation";
import Intro from "./intro";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-gray-800 p-4 sticky top-0 h-screen overflow-y-auto">
        <CourseNavigation />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Intro />} />

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
