import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import routes from "./routesConfig";

const Routes: React.FC = () => {
  return (
    <Suspense fallback={"loading..."}>
      <Switch>
        {routes.map(({ component: Component, ...routeRest }) => (
          <Route key={routeRest.path} {...routeRest}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
};

export default Routes;
