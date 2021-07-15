import { lazy } from "react";

import { RouteConfigProps } from "./types";

import { routesFlat } from "./utils";

const lazyComponent = (pathComponent: string) => {
  return lazy(() => import(pathComponent));
};

const routesConfig: RouteConfigProps[] = [
  {
    path: "/",
    exact: true,
    component: lazyComponent("./Home"),
    state: { title: "Page Home" }
  },
  {
    path: "/:test",
    exact: true,
    component: lazyComponent("./Test"),
    state: { title: "Page Test" },
    children: [
      {
        path: "/child",
        exact: true,
        state: { title: "Page Test Child" },
        component: lazyComponent("./TestChild")
      }
    ]
  }
];

const routes = routesFlat(routesConfig);

export default routes;
