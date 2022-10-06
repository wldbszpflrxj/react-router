import React, { useContext } from "react";
import RouterContext from "./RouterContext";

const Route = ({ path, component }) => {
  const { location } = useContext(RouterContext);
  if (location === path) {
    return <div>{component}</div>;
  }
};

export default Route;
