import React from "react";
import { Link } from "react-router-dom";

import useLocationState from "./useLocationState";

const Test: React.FC = () => {
  const state = useLocationState();

  return (
    <>
      <h1>Test</h1>
      <p>{state.title}</p>
      <Link to="/test/child">ir para pagina TestChild</Link>
    </>
  );
};

export default Test;
