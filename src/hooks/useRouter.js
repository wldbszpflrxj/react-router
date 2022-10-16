import { useCallback, useContext } from "react";
import RouterContext from "../router/RouterContext";

export const useRouter = () => {
  const { location, setLocation } = useContext(RouterContext);

  const push = useCallback(
    (to) => {
      if (location == to) return;

      window.history.pushState(to, to, to);
      setLocation(to);
    },
    [location, setLocation]
  );

  return { push };
};
