import { useContext } from "react";
import RouterContext from "../router/RouterContext";

export const useRouter = () => {
  const { location, setLocation } = useContext(RouterContext);

  const push = (to) => {
    if (location == to) return;

    window.history.pushState(to, to, to);
    setLocation(to);
  };

  return { push };
};
