import DataTypes from "./components/Module1/data-types";
import Variables from "./components/Module1/variables";

export interface CourseRoute {
  path: string;
  name: string;
  component: React.ComponentType;
}

export const courseRoutes: CourseRoute[] = [
  {
    path: "/variables",
    name: "Variables",
    component: Variables,
  },
  {
    path: "/data-types",
    name: "Data Types",
    component: DataTypes,
  },

  // add other module components here, as we build them
];
