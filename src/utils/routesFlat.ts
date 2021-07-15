import { RouteConfigProps } from "../types";

const routesFlat = (routes: RouteConfigProps[]) => {
  return routes.reduce((acc, route) => {
    if (route.children) {
      const children = route.children.map((child) => ({
        ...child,
        path: route.path + child.path
      }));
      acc.push(...routesFlat(children));
    }
    const { children: _, ...restProps } = route;
    acc.push({ ...restProps });

    return acc;
  }, [] as Omit<RouteConfigProps, "children">[]);
};

export default routesFlat;
