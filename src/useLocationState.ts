import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { RouteStateProps } from "./types";

const useLocationConsole = () => {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    console.log("location", location);
    console.log("params", params);
  }, [location, params]);

  return (location.state || {}) as RouteStateProps;
};

export default useLocationConsole;
