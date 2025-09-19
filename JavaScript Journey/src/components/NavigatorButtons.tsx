import { useNavigate, useLocation } from "react-router-dom";
import { courseRoutes } from "../routesConfig";

export default function NavigationButtons() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = courseRoutes.findIndex(
    (r) => r.path === location.pathname
  );

  const prevRoute = currentIndex > 0 ? courseRoutes[currentIndex - 1] : null;
  const nextRoute =
    currentIndex < courseRoutes.length - 1
      ? courseRoutes[currentIndex + 1]
      : null;

  return (
    <div className="flex justify-between mt-8">
      {prevRoute ? (
        <button
          onClick={() => navigate(prevRoute.path)}
          className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
        >
          ← {prevRoute.name}
        </button>
      ) : (
        <div />
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
