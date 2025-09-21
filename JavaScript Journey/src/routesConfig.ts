import DataTypes from "./components/Module1/data-types";

export interface CourseRoute {
  path: string;
  name: string;
  component: React.ComponentType;
}

export const courseRoutes: CourseRoute[] = [
  {
    path: "/data-types",
    name: "Data Types",
    component: DataTypes,
  },
  // add other module components here, as we build them
];
