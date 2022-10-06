import { useEffect, useState } from "react";
import RouterContext from "./RouterContext";

const Router = ({ children }) => {
  const { pathname } = window.location;
  const [location, setLocation] = useState(pathname);

  useEffect(() => {
    window.onpopstate = (e) => {
      setLocation(e.state);
    };
  }, []);

  return (
    <RouterContext.Provider value={{ location, setLocation }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
