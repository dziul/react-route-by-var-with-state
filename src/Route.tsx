import React, { useMemo } from "react";

import { useLocation, Route } from "react-router-dom";

import { RouteProps, RouteStateProps } from "./types";

const RouteComponent: React.FC<RouteProps> = ({
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
    <Route
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

export default RouteComponent;
