import { RouteConfigProps } from "../types";

type RouteConfigPropsCustomToRouteFlat = Omit<RouteConfigProps, 'children' | 'state'> &
  Required<Pick<RouteConfigProps, 'state'>>

type RouteFlatReturn = RouteConfigPropsCustomToRouteFlat[]

const routesFlat = (routes: RouteConfigProps[]) => {
  return routes.reduce((acc, route) => {
    if (route.children) {
      const {
        component: ignoreComponent,
        path: pathParent,
        children,
        state: stateParent = {},
        ...restParent
      } = route
      const innerChildren = children.map(
        ({ state = {}, path: pathChild, ...restChild }) => ({
          ...restParent,
          ...restChild,
          state: { ...stateParent, ...state },
          path: pathParent + pathChild,
        })
      )
      acc.push(...routesFlat(innerChildren))
    }

    const { children, state = {}, ...restProps } = route
    acc.push({
      ...restProps,
      state,
    } as RouteConfigPropsCustomToRouteFlat)

    return acc
  }, [] as RouteFlatReturn)
}

export default routesFlat;
