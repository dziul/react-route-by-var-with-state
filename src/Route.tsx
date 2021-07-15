import React, { useMemo } from "react";

import {
  useLocation,
  Route as RouteRouterDom,
  RouteProps as RouterDomRouteProps
} from "react-router-dom";

import { RouteProps, RouteStateProps } from "./types";

const Route: React.FC<RouteProps> = ({
  children,
  state: stateFromComponent,
  ...rest
}) => {
  const location = useLocation();
  const state = useMemo(() => {
    const stateFromLocation = (location.state || {}) as RouteStateProps;
    if (stateFromComponent) {
      return { ...stateFromLocation, ...stateFromComponent };
    }
    return stateFromLocation;
  }, [stateFromComponent, location.state]);

  return (
    <RouteRouterDom
      {...rest}
      location={{
        ...location,
        state
      }}
      render={() => {
        return children;
      }}
    />
  );
};

export default Route;
