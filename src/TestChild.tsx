import React from "react";
import { Link } from "react-router-dom";

import useLocationState from "./useLocationState";

const Test: React.FC = () => {
  const state = useLocationState();
  return (
    <>
      <h1>Test Child</h1>
      <p>{state.title}</p>
      <Link to="/">ir para pagina home</Link>
    </>
  );
};

export default Test;
