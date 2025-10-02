import { NavLink } from "react-router-dom";
import { courseRoutes } from "../routesConfig";

export default function CourseNavigation() {
  return (
    <nav className="space-y-2">
      {courseRoutes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-teal-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`
          }
        >
          {route.name}
        </NavLink>
      ))}
    </nav>
  );
}
