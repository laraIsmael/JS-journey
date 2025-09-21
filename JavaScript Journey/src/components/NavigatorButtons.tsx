import { useNavigate, useLocation } from "react-router-dom";
import { courseRoutes } from "../routesConfig";
import type { CourseRoute } from "../routesConfig";

export default function NavigationButtons() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname.replace(/\/$/, "").toLowerCase();
  const currentIndex = courseRoutes.findIndex(
    (r) => r.path.toLowerCase() === pathname
  );

  const prevRoute: { path: string; name: string } | null =
    currentIndex > 0
      ? courseRoutes[currentIndex - 1]
      : pathname !== "/"
      ? { path: "/", name: "Back to Intro" }
      : null;

  // no next module yet
  const nextRoute: CourseRoute | null =
    currentIndex >= 0 && currentIndex < courseRoutes.length - 1
      ? courseRoutes[currentIndex + 1]
      : null;

  return (
    <div className="flex justify-between w-full mb-6">
      {prevRoute && (
        <button
          onClick={() => navigate(prevRoute.path)}
          className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
        >
          ← {prevRoute.name}
        </button>
      )}

      {nextRoute && (
        <button
          onClick={() => navigate(nextRoute.path)}
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
        >
          {nextRoute.name} →
        </button>
      )}
    </div>
  );
}
