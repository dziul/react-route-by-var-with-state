import React from "react";
import { Link } from "react-router-dom";
import useLocationState from "./useLocationState";

const Home: React.FC = () => {
  const state = useLocationState();
  return (
    <>
      <h1>Home</h1>
      <p>{state.title}</p>
      <Link
        to={{
          pathname: "/test",
          state: {
            example: "LinkHome"
          }
        }}
      >
        ir para pagina test
      </Link>
    </>
  );
};

export default Home;
