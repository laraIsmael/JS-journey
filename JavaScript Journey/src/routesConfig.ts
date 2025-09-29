import Variables from "./components/Module1/variables";
import DataTypes from "./components/Module1/data-types";
import Intro from "./intro";

export interface CourseRoute {
  path: string;
  name: string;
  component: React.ComponentType;
}

export const courseRoutes: CourseRoute[] = [
  {
    path: "/Intro",
    name: "Intro",
    component: Intro,
  },
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
